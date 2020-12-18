import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class Portal extends Component {
  static parentNode = null;
  static defaultProps = {
    show: false,
    zIndex: 1060,
    target: 'body'
  };
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.settleElement();
    this.appendChildElement();
  }
  componentDidMount() {
    this.settleElement();
    if (this.parentNode !== null) {
      this.forceUpdate();
    }
  }
  appendChildElement = () => {
    const { target } = this.props;
    const targetElement = document.querySelector(target);
    if (targetElement === null) {
      this.parentNode = document.createElement('div');
      document.body.appendChild(this.parentNode);
    } else {
      return;
    }
  };
  settleElement() {
    let { target } = this.props;
    if (typeof target === 'string') {
      this.parentNode = document.querySelector(target);
    } else if (target instanceof HTMLElement) {
      this.parentNode = target;
    } else {
      this.parentNode = document.createElement('div');
    }
  }
  componentWillUnmount() {
    this.parentNode = null;
  }
  render() {
    const { children } = this.props;
    return createPortal(children, this.parentNode);
  }
}
export default Portal;
