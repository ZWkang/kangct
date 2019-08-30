import React, { Component } from 'react';
import is from 'styled-is';
import styled, { css } from 'styled-components';

const TriangleMaps = {
  top: ['left', 'right'],
  left: ['top', 'bottom'],
  right: []
};

const rorateRange = ['right', 'left', 'top', 'bottom'];

const defaultRorate = 'left';

// const afterIShadow = css`
//   &::after {
//     content: ' ';
//     position: absolute;
//     width: 0;
//     height: 0;
//     top: 0;
//     left: 0;
//     border-left: 31px solid transparent;
//     border-right: 31px solid transparent;
//     border-bottom: 31px solid #000;
//     position: absolute;
//     left: -31px;
//     top: -1px;
//     z-index: -111 !important;
//   }
// `;

const Triangle = styled.div`
  display: block;
  position: relative;
  background: #000;
  padding: 4px 8px;
  border-radius: 2px;
  background: #4a4a4a;
  
  white-space: nowrap;
  font-size: 12px;
  color: white;
  ${is('top')`
      margin-bottom: 5px;
      
    `}
    ${is('right')`
      margin-left: 5px;
    `}
    ${is('left')`
      margin-right: 5px;
    `}
    ${is('bottom')`
      margin-top: 5px;
    `}
  &:after{
    content: "";

    border: 5px solid transparent;
    height: 0;
    ${is('top')`
      border-top-color: #4a4a4a;
      transform: translateX(-50%);
      bottom: -10px;
      left: 50%;
      
    `}
    ${is('right')`
      transform: translateY(-50%);
      border-right-color: #4a4a4a;
      left: -10px;
      top: 50%;
    `}
    ${is('left')`
      transform: translateY(-50%);
      border-left-color: #4a4a4a;
      right: -10px;
      top: 50%;
    `}
    ${is('bottom')`
      border-bottom-color: #4a4a4a;
      transform: translateX(-50%);
      top: -10px;
      left: 50%;
    `}
    /* border-top-color: #4a4a4a; */
    position: absolute;
    bottom: -10px;
    z-index: 112;
    /* left: 50%; */
    /* transform: translateX(-50%); */
    
  }
`;
Triangle.defaultProps = {
  size: 10,
  color: '#000'
};

export default Triangle;
