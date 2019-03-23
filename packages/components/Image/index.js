import React from 'react'
import styled, { css } from 'styled-components'
import { injectCustomStyle } from '../utils.js'
import is from 'styled-is'
import MD from 'react-icons/md'
import PropTypes from 'prop-types'



const handleFixedSize = value => {
  if (!/^\d+by\d+$/.test(value)) return "100%";

  const arr = value.split("by");
  const [width, height] = arr;
  return (height / width) * 100 + "%;";
};

const NormalSize = css`
  height: ${props => (props.normalSize ? props.normalSize : "12")}px;
  width: ${props => (props.normalSize ? props.normalSize : "12")}px;
`;

const fixedStyle = css`
  padding: ${props => `${handleFixedSize(props.fixedValue)}` || "100%;"};
`;

const ImageContainer = styled.figure`
  display: block;
  position: relative;
  ${props => (props.isfixed ? fixedStyle : NormalSize)}
`;

const fullPosition = css`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  height: 100%;
`;
const normalSizes = css`
  display: block;
  max-width: 100%;
  height: auto;
`;

const ImageItem = styled.img`
    ${props => (props.isfixed ? fullPosition : normalSizes)}
    border-radius: ${props => (props.round ? props.round + 'px' : "9999999px")};
`;



export default function Image(props) {
    const { imageUrl, isfixed=false, normalSize = {"128"}, round = 0 } = props;
    return (
      <ImageContainer isfixed={isfixed} normalSize fixedValue={"12by1"}>
        <ImageItem src={imageUrl} isfixed={isfixed} />
      </ImageContainer>
    );
}

Image.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    isfixed: PropTypes.bool,
    normalSize: PropTypes.string,
    round: PropTypes.number.isRequired
}