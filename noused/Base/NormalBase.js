import React from 'react';
import styled, { css } from 'styled-components';
import is from 'styled-is';

const handleColor = () => {};
const handleMargin = () => {};
const handleSize = (value, prefix = 'px') => (props) => {
  let tempData = props[value];
  let result;
  if (!Array.isArray(tempData)) {
    tempData = [tempData];
  }
  const len = tempData.length;
  switch (len) {
    case 1:
      result = `${tempData}`;
      break;
    case 2:
    case 3:
      result = tempData.slice(0, len).join(prefix + ' ');
      break;
    case 4:
      result = tempData.join(prefix + ' ');
      break;
    default:
      result = tempData.slice(0, 4).join(prefix + ' ');
      break;
  }
  return css`
    ${result}px
  `;
};

const p = (name) => (props) => props[name];

const NormalBase = styled.div`
    ${is('padding')`
        padding: ${handleSize('padding')};
    `}
    ${is('margin')`
        margin: ${handleSize('margin')};
    `}
    ${is('color')`
        color: ${p('color')};
    `}
`;

export default NormalBase;
