import React, { useRef, useState, useCallback, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import is, { isNot } from 'styled-is';
import Animated from '../Animate/help';
import DialogContent from './DialogCntent';
import DialogTitle from './DialogTitle';
import FTR from 'focus-trap-react';

// bootstrap solution
const LockBody = createGlobalStyle`
  .modal-lock {
    overflow: hidden;
    /* position: fixed; */
  }
`;

const enter = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const end = keyframes`
  to {
    opacity: 0;
  }
`;

const AnimateMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 99;
`;
const DialogWrapper = styled.div`
  background: white;
  position: relative;
  z-index: 101;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
const Animate = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  ${is('animationType')`
    animation: 500ms ${(props) => {
      switch (props.animationType) {
        case 'enter':
          return enter;
        case 'leave':
          return end;
        default:
          return end;
      }
    }} both ease-in;
  `}

  /* 子元素定位相关 */
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /**/
  ${isNot('display')`
    display: none;
  `}

  ${is('duration')`
    animation-duration: ${(props) => props.duration || 0}ms;
  `}
`;

function DialogAnimate(props) {
  // class DialogAnimate extends React.Component {
  // constructor(props) {
  //   super(props);
  let animateRef = useRef(null);
  // }
  // state = {
  //   isShow: false,
  //   animationType: 'leave'
  // };
  const [isShow, setIsShow] = useState(false);
  const [animationType, setAnimationType] = useState('leave');

  useEffect(() => {
    if (props.visible) {
      enter();
    }
  }, []);

  // componentDidMount() {
  //   if (this.props.visible) {
  //     this.enter();
  //   }
  // }
  useEffect(() => {
    if (props.visible) {
      enter();
    } else if (!props.visible) {
      leave();
    }
  }, [props.visible]);
  // componentWillReceiveProps(nextProps) {
  //   if (!this.props.visible && nextProps.visible) {
  //     this.enter();
  //   } else if (this.props.visible && !nextProps.visible) {
  //     this.leave();
  //   }
  // }
  function enter() {
    setIsShow(true);
    setAnimationType('enter');

    document.body.classList.add('modal-lock');
  }

  function leave() {
    setAnimationType('leave');
    document.body.classList.remove('modal-lock');
  }
  function handleEscCode(event) {
    const { onClose } = props;
    if (event.keyCode === 27) {
      onClose && onClose();
    }
  }
  function handleAnimationEnd(event) {
    const { onEachAnimationEnd, onEnterAnimationEnd, onLeaveAnimationEnd } = props;
    if (animationType === 'leave') {
      // this.setState({ isShow: false }, () => {
      //   onLeaveAnimationEnd && onLeaveAnimationEnd(event);
      // });
      setIsShow(false);
      onLeaveAnimationEnd && onLeaveAnimationEnd(event);
    }
    if (animationType === 'enter') {
      onEnterAnimationEnd && onEnterAnimationEnd(event);
    }
    if (props.visible) {
      // console.log(animateRef);
      animateRef.current && animateRef.current.focus();
      // debugger;
      // animateRef.current.focus();
    }

    onEachAnimationEnd && onEachAnimationEnd(event);
  }
  // render() {
  // const { isShow } = this.state;
  const { duration, onClose, children } = props;
  if (!isShow) return null;
  return (
    <FTR>
      <Animate
        onAnimationEnd={handleAnimationEnd}
        animationType={animationType}
        onKeyUp={handleEscCode}
        aria-modal="true"
        ref={animateRef}
        display
        duration={duration}
        role="dialog"
      >
        <LockBody />
        <AnimateMask onClick={onClose} />
        {children}
      </Animate>
    </FTR>
  );
  // }
}

export default DialogAnimate;
