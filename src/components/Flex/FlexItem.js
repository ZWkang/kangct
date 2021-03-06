import React from 'react';
import styled from 'styled-components';
import is from 'styled-is';
import { FlexItemPropsTypes, FlexCommonProps } from './props';

const FlexItemDefaultCssString = `
  order: 0;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 1;
  display: block;
`;

const FlexItem = styled.div`
  ${FlexItemDefaultCssString}

  ${is('order')`
    order: ${(props) => props.order}
  `}

  ${is('flexGrow')`
    flex-grow: ${(props) => props.flexGrow}
  `}

  ${is('flexShrink')`
    flex-shrink: ${(props) => props.flexShrink}
  `}

  ${is('flexBasis')`
    flex-basis: ${(props) => props.flexBasis}
  `}

  ${is('flex')`
  flex: ${(props) => props.flex}
  `}


  ${is('alignSelf')`
    align-self: ${(props) => props.alignSelf}
  `}

  ${is('customStyle')`
    ${(props) => props.customStyle}
  `}
`;

FlexItem.propTypes = FlexItemPropsTypes;
FlexItem.defaultProps = FlexCommonProps;

export default FlexItem;
