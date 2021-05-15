import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import animated from './help.js';
import React, { Component } from 'react';
// import omit from 'lodash.omit';
import { Object_omit as omit } from '../util/index.js';

const generatorComponent = ({ name, duration, keyframesFunction, delay }) => {
  const animateKeyframes = keyframes`${keyframesFunction || animated[name]}`;
  const Wrapper = styled.div`
    will-change: contents;
    animation: ${animateKeyframes};
    animation-duration: ${duration || 0}ms;
    animation-delay: ${delay || 0}ms;
  `;
  return Wrapper;
};

// 如果omit 了onAnimationEnd的话，子组件就无法接受外部的onAnimationEnd了。bad design
class Animate extends Component {
  constructor(props) {
    super(props);
    this.RenderComponent = generatorComponent({
      keyframesFunction: props.keyframesFunction,
      name: props.funcName,
      duration: props.duration,
      delay: props.delay
    });
  }
  render() {
    const childProps = Object.assign({}, this.props);
    const omitProps = omit(childProps, [
      'funcName',
      'children',
      'name',
      'duration',
      'keyframesFunction',
      'delay',
      'onAnimationEnd'
    ]);
    const { RenderComponent: Wrapper } = this;
    const Children = React.Children.map(this.props.children, (_) => {
      if (React.isValidElement(_)) {
        return React.cloneElement(_, {
          ...omitProps
        });
      }
      return _;
    });

    return <Wrapper onAnimationEnd={this.props.onAnimationEnd}>{Children}</Wrapper>;
  }
}

Animate.propTypes = {
  keyframesFunction: PropTypes.func,
  name: PropTypes.string,
  duration: PropTypes.number
};

Animate.defaultProps = {
  keyframesFunction: void 666,
  name: '',
  duration: 0,
  onAnimationEnd: () => {}
};
/**
 * @components
 */

export default Animate;
