import React from 'react';
import styled from 'styled-components';
import is, { isNot } from 'styled-is';

const TooltipsWrapper = styled.div`
  ${isNot('show')`
    display: none;
  `}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default TooltipsWrapper;
