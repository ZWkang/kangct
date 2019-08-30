import React from 'react';
import styled, { css } from 'styled-components';

// console.log(css`
// border: 1px solid ${props => props.theme.borderRadius};
// `)

const p = (...arg) => (props) => props[arg[0][0]];
const LayoutBase = css`
    ${is('zIndex')`
        z-index: ${p`zIndex`}
    `}
    ${is('visibility')`
        visibility: ${p`visibility`}
    `}
    ${is('textDecoration')`
        text-decoration: ${p`textDecoration`}
    `}
    ${is('orphans')`
        orphans: ${p`orphans`}
    `}
    ${is('cursor')`
        cursor: ${p`cursor`}
    `}
    ${is('color')`
        color: ${p`color`}
    `}
    ${is('borderTopColor')`
        border-top-color: ${p`borderTopColor`}
    `}
    ${is('borderTopLeftRadius')`
        border-top-left-radius: ${p`borderTopLeftRadius`}
    `}
    ${is('borderTopRightRadius')`
        border-top-right-radius: ${p`borderTopRightRadius`}
    `}

`;

let marginTable = {
  margin: 0,
  marginLeft: 1,
  marginRight: 2,
  marginTop: 3,
  marginBottom: 4
};
