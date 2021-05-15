import React, { Component, createRef } from 'react';
import is from 'styled-is';
import styled from 'styled-components';
import Triangle from './Triangle';
import Rect from '../Rect';
import Portal from '../Portal';

const varTrans = (name) => (props) =>
  `
    ${name}: ${props[name]}px;
  `;

const Position = styled.div`
  ${is('left')`
    ${varTrans('left')}
  `}
  ${is('right')`
    ${varTrans('right')}
  `}
  ${is('top')`
    ${varTrans('top')}
  `}
  ${is('bottom')`
    ${varTrans('bottom')}
  `}
  position: absolute;
  transform: translateX(-50%);
`;

const Tool = styled.div`
  position: absolute;
  width: auto;

  ${is('top')`
    bottom: 0;
    transform: translateX(-50%);
  `}
  ${is('right')`
    left: 0;
    transform: translateY(-50%);
  `}
  ${is('left')`
    right: 0;
    transform: translateY(-50%);
  `}
  ${is('bottom')`
    top: 0;
    transform: translateX(-50%);
  `}
`;
class ToolTips extends Component {
  static defaultProps = {
    delay: 0,
    defaultVisible: false,
    target: React.createRef(),
    position: 'top'
  };
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      target: React.createRef()
    };
    this.btnRef = createRef();
  }
  renderToolTipsPosition = ({ left, top, width, height }) => {
    const { position } = this.props;
    switch (position) {
      case 'left':
        left = left;
        top = top + height / 2;
        break;
      case 'right':
        left = left + width;
        top = top + height / 2;
        break;
      case 'top':
        left = left + width / 2;
        top = top;
        break;
      case 'bottom':
        left = left + width / 2;
        top = top + height;
        break;
      default:
        left = 0;
        top = 0;
        break;
    }
    const props = { [position]: true };
    return (
      <Position left={left} top={top}>
        <Tool {...props}>
          <Triangle {...props}>{this.props.children}</Triangle>
        </Tool>
      </Position>
    );
  };
  render() {
    const { show, target } = this.props;
    if (!show) {
      return null;
    }
    return (
      <Portal>
        <Rect target={target} show={show}>
          {this.renderToolTipsPosition}
        </Rect>
      </Portal>
    );
  }
}

export default ToolTips;
