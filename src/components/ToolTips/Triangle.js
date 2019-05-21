import React, { Component } from 'react'
import is from 'styled-is'
import styled, { css } from 'styled-components'


const TriangleMaps = {
  top: ['left', 'right'],
  left: ['top', 'bottom'],
  right: []
}

const rorateRange = ['right', 'left', 'top', 'bottom']

const defaultRorate = 'left';

const afterIShadow = css`
  &::after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    border-left: 31px solid transparent;
    border-right: 31px solid transparent;
    border-bottom: 31px solid #000;
    position: absolute;
    left: -31px;
    top: -1px;
    z-index: -111!important;
  }
`

const Triangle = styled.span`
  display: inline-block;
  position: absolute;
  background: #000;
  padding: 4px 8px;
  border-radius: 4px;
  ${props => props.rorate}: calc(-100% - ${props => props.size * 2}px);
  left: 0;
  &:before{
    content: ' ';
    display: block;
    width: 0px;
    height: 0px;
    position: absolute;
    ${props => props.rorate}: 100%;
    left: 0;
    right: 0;
    margin: auto;
    ${props => {
      const rorate = props.rorate
      return rorateRange.filter(v => v !== rorate).reduce((pre, next) => {
        return pre + css(`border-${next}: ${props.size}px solid transparent;`)
      }, css(`border-${rorate}: ${props.size}px solid #000;`))
    }}
    z-index: 112;
  }
`
Triangle.defaultProps = {
  size: 10,
  color: '#000'
}

export default Triangle