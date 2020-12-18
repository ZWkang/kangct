import React from 'react';
import is from 'styled-is';
import styled, { css } from 'styled-components';

const baseSize = 8;
const sizeMap = {
  s: baseSize,
  m: baseSize * 2,
  l: baseSize * 3
};

const handlePaddingSize = (name) => (props) => `padding: ${sizeMap[props[name]]}px;`;
const Panel = styled.div`
  padding: ${baseSize * 0}px;
  ${is('hover')`
    :hover{
        transform: matrix(1,0,0,1,0, -1);
    }
  `}
  ${is('paddingSize')`
    ${handlePaddingSize('paddingSize')}
  `}
  ${is('shadow')`
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  `}
`;
/**
 * @components
 */
export default Panel;
