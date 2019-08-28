import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import animated from './help.js';
import React, { Component } from 'react';
// import omit from 'lodash.omit';
import { Object_omit as omit } from '../util/index.js';

const generatorComponent = ({ name, duration, keyframesFuntion, delay }) => {
  const animateKeyframs = keyframes`${keyframesFuntion || animated[name]}`;
  const Wrapper = styled.div`
    will-change: contents;
    animation: ${animateKeyframs};
    animation-duration: ${duration || 0}ms;
    animation-delay: ${delay || 0}ms;
  `;
  return Wrapper;
};

class Animate extends Component {
  constructor(props) {
    super(props);
    this.RenderComponent = generatorComponent({
      keyframesFuntion: props.keyframesFuntion,
      name: props.funcname,
      duration: props.duration,
      delay: props.delay
    });
  }
  render() {
    const childProps = Object.assign({}, this.props);
    const omitProps = omit(childProps, [
      'funcname',
      'children',
      'name',
      'duration',
      'keyframesFuntion',
      'delay'
    ]);
    const { RenderComponent: Wrapper } = this;
    const Children = React.cloneElement(this.props.children, {
      ...omitProps
    });

    return <Wrapper>{Children}</Wrapper>;
  }
}

Animate.propTypes = {
  keyframesFuntion: PropTypes.func,
  name: PropTypes.string,
  duration: PropTypes.number
};

Animate.defaultProps = {
  keyframesFuntion: void 666,
  name: '',
  duration: 0
};
/**
 * @components
 */

export default Animate;
