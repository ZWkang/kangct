import React from 'react';
import styled from 'styled-components';
import is from 'styled-is';
import { FlexPropsTypes, FlexCommonPorps } from './props.js';

// 样式分离
// css in js

const DefaultCssString = `
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
`;

const FullDefaultOption = `
  width: 100%;
  height: 100%;
  flex-basis: 100%;
`;

const CenterDefaultOption = `
  align-items: center;
  justify-content: center;
`;

const Flex = styled.div`
  ${DefaultCssString}

  ${is('display')`
    display: ${(props) => props.display}
  `}

  ${is('full')`
    ${FullDefaultOption}
  `}

  ${is('center')`
    ${CenterDefaultOption}
  `}

  ${is('flexDirection')`
    flex-direction: ${(props) => props.flexDirection}
  `}

  ${is('flexWrap')`
    flex-wrap: ${(props) => props.flexWrap}
  `}

  ${is('flexFlow')`
    flex-flow: ${(props) => props.flexFlow}
  `}

  ${is('justifyContent')`
    justify-content: ${(props) => props.justifyContent}
  `}

  ${is('alignItems')`
    align-items: ${(props) => props.alignItems}
  `}

  ${is('alignContent')`
    align-content: ${(props) => props.alignContent}
  `}

  ${is('customStyle')`
    ${(props) => props.customStyle}
  `}
`;

Flex.propTypes = FlexPropsTypes;
Flex.defaultProps = FlexCommonPorps;

/**
 * @components Flex
 */
export default Flex;
