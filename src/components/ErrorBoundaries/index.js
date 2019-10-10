import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const FailHeader = styled.h2`
  font-size: 2em;
  color: black;
`;
const FailContent = styled.section`
  font-size: 1em;
  line-height: 1.5;
  color: #333;
`;

const defaultCallback = function(a, b, c) {
  throw b;
};

const RandomString = () =>
  Math.random()
    .toString()
    .slice(2, 10);

const DefaultFallBackComponent = ({ error, componentStack }) => {
  componentStack = componentStack.split('\n');
  const FailId = RandomString();
  return (
    <div aria-labelledby={FailId}>
      <FailHeader id={FailId} aria-label="title">
        {error.message}
      </FailHeader>
      <FailContent>
        {componentStack.map((stack, index) => {
          return <p key={stack + index}>{stack}</p>;
        })}
      </FailContent>
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
