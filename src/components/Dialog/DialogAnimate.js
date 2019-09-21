import React from 'react';
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
class DialogAnimate extends React.Component {
  constructor(props) {
    super(props);
    this.animateRef = null;
  }
  state = {
    isShow: false,
    animationType: 'leave'
  };

  componentDidMount() {
    if (this.props.visible) {
      this.enter();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.visible && nextProps.visible) {
      this.enter();
    } else if (this.props.visible && !nextProps.visible) {
      this.leave();
    }
  }
  enter() {
    this.setState(
      {
        isShow: true,
        animationType: 'enter'
      },
      () => {
        document.body.classList.add('modal-lock');
      }
    );
  }

  leave() {
    this.setState({ animationType: 'leave' }, () => {
      document.body.classList.remove('modal-lock');
    });
  }
  handleEscCode = (event) => {
    const { onClose } = this.props;
    if (event.keyCode === 27) {
      onClose && onClose();
    }
  };
  handleAnimationEnd = (event) => {
    const { onEachAnimationEnd, onEnterAnimationEnd, onLeaveAnimationEnd } = this.props;
    if (this.state.animationType === 'leave') {
      this.setState({ isShow: false }, () => {
        onLeaveAnimationEnd && onLeaveAnimationEnd(event);
      });
    }
    if (this.state.animationType === 'enter') {
      onEnterAnimationEnd && onEnterAnimationEnd(event);
    }
    if (this.props.visible) {
      this.animateRef.focus();
    }
    onEachAnimationEnd && onEachAnimationEnd(event);
  };
  render() {
    const { isShow } = this.state;
    const { duration, onClose, children } = this.props;
    if (!isShow) return null;
    return (
      <FTR>
        <Animate
          onAnimationEnd={this.handleAnimationEnd}
          animationType={this.state.animationType}
          onKeyUp={this.handleEscCode}
          aria-modal="true"
          ref={(ref) => (this.animateRef = ref)}
          tabIndex="0"
          display
          duration={duration}
        >
          <div tabIndex="0" />
          <LockBody />
          <AnimateMask onClick={onClose} />
          {children}
          <div tabIndex="0" />
        </Animate>
      </FTR>
    );
  }
}

export default DialogAnimate;
