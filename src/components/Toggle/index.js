import React, { Component, useState } from 'react';

class Toggle extends Component {
  state = {
    on: this.props.initial
  };

  toggle = () => {
    this.setState(({ on }) => ({
      on: !on
    }));
  };
  renderToggle = () => {
    const { children, render, component, ...restProps } = this.props;
    const toggleProps = { on: this.state.on, toggle: this.toggle };
    const ChildenIsFunc = (child) => typeof child === 'function';

    return children && ChildenIsFunc(children)
      ? children({ ...restProps, ...toggleProps })
      : component
      ? React.createElement(component, { ...restProps, ...toggleProps })
      : render
      ? render({ ...restProps, ...toggleProps })
      : null;
  };
  render() {
    return <div>{this.renderToggle()}</div>;
  }
}

export { Toggle as default };
