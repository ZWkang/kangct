import React, { Component } from 'react';
import jump from 'jump.js';

class ScrollTo extends Component {
  handleScroll = (options) => {
    const { selector, handleScroll } = this.props;
    const target = document.querySelector(selector);
    options.callback = () => {
      handleScroll && handleScroll();
    };
    target && jump(target, options);
  };
  render() {
    return (
      <React.Fragment>
        {this.props.children({
          handleScroll: this.handleScroll,
          ...this.props
        })}
      </React.Fragment>
    );
  }
}

ScrollTo.defaultProps = {};
/**
 * @components
 */
export default ScrollTo;
