import React, { Component } from 'react';

export default class CloseWithEscape extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onEscape);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape);
  }
  onEscape = (e) => {
    const { onEscape } = this.props;
    if (e.keyCode === 27) {
      onEscape && onEscape();
    }
  };

  render() {
    return this.props.children;
  }
}
