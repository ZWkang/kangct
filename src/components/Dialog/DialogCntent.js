import React from 'react';
import styled from 'styled-components';
import is from 'styled-is';

const maxHeightSizeMap = {
  small: '30vh',
  normal: '60vh',
  big: '80vh'
};
const maxWidthSizeMap = {
  small: '30vw',
  normal: '60vw',
  big: '80vw'
};
const controlMaxHeight = (props) => {
  return {
    maxHeight: maxHeightSizeMap[props.maxHeight] || maxHeightSizeMap['normal'],
    minHeight: maxHeightSizeMap[props.maxHeight] || maxHeightSizeMap['normal']
  };
};
const controlMaxWidth = (props) => {
  return {
    maxWidth: maxWidthSizeMap[props.maxWidth] || maxWidthSizeMap['normal'],
    minWidth: maxWidthSizeMap[props.maxWidth] || maxWidthSizeMap['normal']
  };
};
const DialogContent = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  /* align-content: center; */
  /* justify-content: center; */
  overflow-y: auto;
  overflow-x: auto;
  border-radius: 1rem;
  ${is('overflow')`
        overflow: hidden;
    `}

  ${is('maxHeight')`${(props) => controlMaxHeight(props)}`}
  ${is('maxWidth')`${(props) => controlMaxWidth(props)}`}
`;

export default DialogContent;
