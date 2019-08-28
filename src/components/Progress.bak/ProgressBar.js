import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'
import is from 'styled-is'

const sizeMap = {
  large: 24,
  medium: 20,
  default: 16,
  small: 12
}

const colors = {
  danger: '#FF3860',
  success: '#23d160',
  normal: '#3273dc',
  warning: '#ffdd57'
}



const defaultProgressBar = `
  display: block;
  -webkit-appearance: none;
  border: none;
  border-radius: 1111px;
  display: block;
  height: 14px;
  overflow: hidden;
  padding: 0;
  width: 100%;
  background-color:#e6e6e6;
`

const moveIndeterminate = keyframes`
  from{
    background-position: 200% 0;
  }
    
  to{
    background-position: -200% 0;
  }
  
`

const ProgressBar = styled.progress`
  ${defaultProgressBar}
  ${is('size')`
    height: ${props => sizeMap[props.size]}px;
  `}
  &:indeterminate {
    ${is('colortype')`
      background-image: linear-gradient(to right, ${props => colors[props.colortype] || colors['normal']} 30%,#dbdbdb 30%);
    `}
    animation: ${moveIndeterminate} 1.5s linear infinite;
    animation-timing-function: linear;
    background-color: #dbdbdb;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: 150% 150%;
    &::-webkit-progress-bar{
      background-color: transparent;
    }
    &::-moz-progress-bar{
      background-color: transparent;
    }
  }

  &::-webkit-progress-bar{
    background-color: hsl(0, 0%, 86%);
  }
  &::-webkit-progress-value{
    background-color: hsl(0, 0%, 29%);
  }
`

export default ProgressBar