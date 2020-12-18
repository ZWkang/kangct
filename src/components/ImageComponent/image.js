import React from 'react';
import styled, { css } from 'styled-components';
import is, { match } from 'styled-is';
import PropTypes from 'prop-types';

const fixedStyleRegExp = /\bis(\d+?)x(\d+)\b/;

const ratioStyleRegExp = /\bis(\d+?)by(\d+)\b/;

const CalculationFixedSize = (props) => {
  const mapsKeys = Object.keys(props);
  const filterKeys = mapsKeys.filter(String).filter((key) => fixedStyleRegExp.test(key));

  const LastOneKey = filterKeys[filterKeys.length - 1];
  //   debugger;
  // TODO: fix it
  const [, width, height] = fixedStyleRegExp.exec(LastOneKey) || ['', '', ''];

  return css`
    width: ${width}px;
    height: ${height}px;
  `;
};

const CalculationRatioSize = (props) => {
  const mapsKeys = Object.keys(props);
  const filterKeys = mapsKeys.filter(String).filter((key) => ratioStyleRegExp.test(key));

  const LastOneKey = filterKeys[filterKeys.length - 1];
  const [, width, height] = ratioStyleRegExp.exec(LastOneKey) || ['', 1, 0];

  const ratio = (height / width) * 100;
  return css`
    padding-bottom: ${ratio}%;
  `;
};

const CalculationRadius = ({ radius }) => {
  if (!radius) return '';

  if (typeof radius === 'number') {
    return css`
      border-radius: ${radius}px;
    `;
  }
  return css`
    border-radius: 999999px;
  `;
};

const ImageContainer = styled.figure`
  margin: 0;
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
`;
const normalSizes = css`
  display: block;
  max-width: 100%;
  width: 100%;
  height: auto;
`;

const ImageItem = styled.img`
  ${normalSizes}
  ${match(ratioStyleRegExp)`
    ${fullPosition}
  `}
  ${CalculationRadius}
`;
const NormalItem = styled.div`
  ${normalSizes}
  ${match(ratioStyleRegExp)`
    ${fullPosition}
  `}
  ${CalculationRadius}
`;

// styled-components/issues/1198
const handleRadius = (radius) => {
  return {
    radius: radius ? (typeof radius === 'number' ? radius : 'true') : 0
  };
};

const ImageComponent = React.forwardRef(
  ({ radius, imageUrl, type = 'img', children, ...rest }, ref) => {
    radius = handleRadius(radius);
    const defaultInner = <ImageItem {...radius} src={imageUrl} {...rest} />;
    const normalInner = (
      <NormalItem {...radius} {...rest}>
        {children}
      </NormalItem>
    );
    if (type !== 'img') {
      return (
        <ImageContainer {...rest} ref={ref}>
          {normalInner}
        </ImageContainer>
      );
    }
    return (
      <ImageContainer {...rest} ref={ref}>
        {defaultInner}
      </ImageContainer>
    );
  }
);

export default ImageComponent;
