import PropTypes from 'prop-types';
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const moveVertically2 = (frames) => {
  const ranges = 1 / (frames.length - 1);
  let text = '';

  for (let i = 0; i < frames.length; i++) {
    text += `${i * ranges * 100}% {
      background-position: ${frames[i].map((o) => `${o}px`).join(' ')};
    }
    `;
  }
  return keyframes`${text}`;
};

function calcXYLimit(w, ww) {
  return Math.floor(w / ww);
}

function calcFrames(w, ww, y, yy, limit) {
  const result = [];
  for (let o = 0; o < calcXYLimit(y, yy); o++) {
    for (let oo = 0; oo < calcXYLimit(w, ww); oo++) {
      // 0% => n - 1 => 100%
      if (result.length >= limit + 1) {
        return result;
      }

      result.push([oo * ww * -1, -1 * o * yy]);
    }
  }
  return result;
}

const Wrapper = styled.div`
  background-image: url(${(props) => props.image});
  background-size: ${(props) => props.imageW}px;
  will-change: background-position;
  width: ${(p) => p.w}px;
  height: ${(p) => p.h}px;
  ${(p) =>
    css`
      animation: ${moveVertically2(calcFrames(p.imageW, p.w, p.imageH, p.h, p.frames))}
        ${p.duration}ms steps(1) infinite;
    `};
`;

/**
 * @component
 * @example
 * <FrameAnimate>
 */
function FrameAnimate(props) {
  const { source, width, height, frames, imageW, imageH, duration } = props;
  if (!source) return null;
  return (
    <Wrapper
      duration={duration}
      image={source}
      w={width}
      h={height}
      imageW={imageW}
      imageH={imageH}
      frames={frames}
    />
  );
}

FrameAnimate.propTypes = {
  /**
   * frame width
   */
  width: PropTypes.number,
  /**
   * frame height
   */
  height: PropTypes.number,
  /**
   * how many frames
   */
  frames: PropTypes.number,
  /**
   * infinite or not (暂时无用)
   */
  _infinite: PropTypes.bool,
  /**
   * frame image source
   */
  source: PropTypes.string,
  /**
   * image source width
   */
  imageW: PropTypes.number,
  /**
   * image source height
   */
  imageH: PropTypes.number,
  /**
   * animation duration
   */
  duration: PropTypes.number
};

FrameAnimate.defaultProps = {
  width: 0,
  height: 0,
  steps: 0,
  _infinite: true, // 暂时无用
  source: '',
  duration: 1000,
  imageW: 0,
  imageH: 0
};

/* @component */
export default FrameAnimate;
