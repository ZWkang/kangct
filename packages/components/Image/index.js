import React from 'react';
import styled, { css } from 'styled-components';
import { injectCustomStyle } from '../utils.js';
import is from 'styled-is';
import MD from 'react-icons/md';
import PropTypes from 'prop-types';

const fixedStyleRegExp = /\Bis(\d+?)x(\d+)\b/;

const ratioStyleRegExp = /\b(\d+?)by(\d+)\b/;

const CalculationFixedSize = (props) => {
  const mapsKeys = Object.keys(props);
  const filterKeys = mapsKeys.filter(fixedStyleRegExp.test);

  const LastOneKey = filterKeys[filterKeys.length - 1];
  const [, width, height] = fixedStyleRegExp.exec(LastOneKey);

  return css`
    width: ${width}px;
    height: ${height}px;
  `;
};

const CalculationRatioSize = (props) => {
  const mapsKeys = Object.keys(props);
  const filterKeys = mapsKeys.filter(ratioStyleRegExp.test);

  const LastOneKey = filterKeys[filterKeys.length - 1];
  const [, width, height] = ratioStyleRegExp.exec(LastOneKey);

  const ratio = (height / width) * 100;
  return css`
    padding-bottom: ${ratio}%;
  `;
};

const CalculationRadius = (props) => {
  if (!props.radius) return '';
  if (typeof props.radius === 'number') {
    return css`
      border-radius: ${props.radius}px;
    `;
  }
  return css`
    border-radius: 999999px;
  `;
};

const ImageContainer = styled.figure`
  display: block;
  position: relative;
  ${CalculationFixedSize}
  ${CalculationRatioSize}
`;

const fullPosition = css`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  /* width: 100%; */
  /* max-width: 100%; */
`;
const normalSizes = css`
  display: block;
  max-width: 100%;
  width: 100%;
  height: auto;
`;

const ImageItem = styled.img`
    ${normalSizes}
    ${is(ratioStyleRegExp)`
      ${fullPosition}
    `}
    ${CalculationRadius}
`;

const Image = ({ radius, imageUrl, ...reset }) => {
  return (
    <ImageContainer {...rest}>
      <ImageItem radius={radius} src={imageUrl} {...rest} />
    </ImageContainer>
  );
};

export default Image;
