import React from 'react';
import is from 'styled-is';
import styled from 'styled-components';

const BoxDefaultCssString = styled.div`
  color: #4a4a4a;
  background-color: hsl(0, 0%, 100%);
  border-radius: 6px;
  box-shadow: 0 1px 1px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  padding: 1.25rem;
  transition: all 0.2s ease-in;
  text-align: left;

  ${is('hoverStyle')`
    &:hover,
    &:focus {
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.1);
    }
  `}
`;

const Box = styled(BoxDefaultCssString)`
  ${is('customStyle')`
    ${(props) => props.customStyle}
  `}
`;

Box.displayName = 'Box'

export default Box;
