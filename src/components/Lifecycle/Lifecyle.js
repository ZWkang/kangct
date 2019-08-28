import React from 'react';

const noop = () => {};
class Lifecycle extends React.Component {
  static defaultProps = {
    didMount: noop,
    unMount: noop,
    shouldUpdate: noop,
    didCatch: noop
  };
  constructor(props) {
    super(props);
    this.state = props.initState || {};
    this._refs = props.refs || {};
    this._setState = (...args) => this.setState(...args);
    this._forceUpdate = (...args) => this.forceUpdate(...args);
  }

  getArgs = () => {
    const { state, props, _refs: refs, _setState: setState, _forceUpdate: forceUpdate } = this;
    return { state, props, refs, setState, forceUpdate };
  };
  componentDidMount(...arg) {
    return this.props.didMount(...arg);
  }
  componentDidCatch(...arg) {
    return this.props.didCatch(...arg);
  }
  componentWillUnmount(...arg) {
    return this.props.unMount(...arg);
  }
  shouldComponentUpdate(...arg) {
    return this.props.shouldUpdate(...arg);
  }
  render(...arg) {
    return this.props.render(...arg);
  }
}

export default Lifecycle;
