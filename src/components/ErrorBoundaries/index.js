import React, { Component, Fragment } from 'react';

const defaultCallback = function(a, b, c) {
  throw b;
};

const DefaultFallBackComponent = ({ error, componentStack }) => {
  componentStack = componentStack.split('\n');
  return (
    <div>
      <div style={{ color: 'red' }}>{error.message}</div>
      <div style={{ color: 'green' }}>
        {componentStack.map((stack, index) => {
          return <p key={stack + index}>{stack}</p>;
        })}
      </div>
    </div>
  );
};

class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      info: null
    };
  }
  componentDidCatch = (error, info) => {
    const { ErrorCallback = defaultCallback } = this.props;
    try {
      ErrorCallback(this, error, info);
    } catch (err) {
      this.setState({
        error: err,
        info
      });
    }
  };
  render() {
    const { children, FallBackComponent = DefaultFallBackComponent, ...restProps } = this.props;
    const { error, info } = this.state;
    if (error) {
      return <FallBackComponent error={error} componentStack={info.componentStack} />;
    }
    return <Fragment>{children}</Fragment>;
  }
}
/**
 * you can write some in here you know?
 *
 * @components
 */
export default ErrorBoundaries;
