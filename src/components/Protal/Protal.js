import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import invariant from 'tiny-invariant';

class Protal extends Component {
  static parentNode = null;
  static defaultProps = {
    show: false,
    zIndex: 1060,
    target: 'body'
  };
  constructor(props) {
    super(props);
    this.settleElement();
  }
  componentDidMount() {
    // this.appendChildElemen()
    this.appendChildElemen();
  }
  appendChildElemen = () => {
    const { target } = this.props;
    const targetElement = document.querySelector(target);
    // debugger
    if (targetElement === null) {
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
    //     consol
    //   if(this.parentNode !== null && this.props.target === 'body' ) {
    //     this.parentNode.parentNode.removeChild(React.findDOMNode(this.childRef))
    //   }
    this.parentNode = null;
  }
  createElementInsert = () => {
    // const { target, position = 'afterend' } = this.props
    // const el = document.createElement('div')
    // let queryElement = target
    // if(typeof target === 'string') {
    //     queryElement = document.querySelector(target)
    //     invariant(queryElement, 'to Element unfound' + queryElement)
    // }
    // queryElement.insertAdjacentElement(position, el)
    // return el
  };
  render() {
    const { children } = this.props;
    return createPortal(children, this.parentNode);
  }
}
export default Protal;
