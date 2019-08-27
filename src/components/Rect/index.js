import React, { Fragment } from 'react';
import { findDOMNode } from 'react-dom';

class Rect extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0
    };
  }
  static defaultProps = {
    show: false
  };
  componentDidMount() {
    this.getTargetBoundingClientRect();
  }
  //   componentDidUpdate(prevProps) {
  //     if (prevProps.target !== this.props.target || prevProps.show != this.props.show) {
  //       this.getTargetBoundingClientRect();
  //     }
  //   }
  componentWillReceiveProps(props) {
    if (props.target !== this.props.target || props.show != this.props.show) {
      this.getTargetBoundingClientRect();
    }
  }

  getTargetBoundingClientRect = () => {
    const { target } = this.props;

    if (target.current === null) return { height: 0, width: 0, x: 0, y: 0 };

    let ele = null;

    if (target.current !== null && target.current !== void 666) {
      ele = findDOMNode(this.props.target.current);
    } else {
      ele = findDOMNode(this.props.target);
    }

    const rect = ele.getBoundingClientRect();
    let top = rect.top + (document.documentElement.scrollTop || document.body.scrollTop);
    let left = rect.left + (document.documentElement.scrollLeft || document.body.scrollLeft);
    this.setState({
      x: rect.x,
      y: rect.y,
      width: rect.width,
      top: top,
      left: left,
      bottom: rect.bottom,
      right: rect.right,
      height: rect.height
    });
  };
  renderChild = () => {
    return this.props.children(this.state);
  };
  render() {
    return <Fragment>{this.renderChild()}</Fragment>;
  }
}

export default Rect;
