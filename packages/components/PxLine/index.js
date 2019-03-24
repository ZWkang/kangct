import React from 'react'
import styled from 'styled-components'
import is from 'styled-is'

const baseString = `
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
`

const setTopLine = ({
  color,
  ishalf,
  px
}) => `
  &:before{
    ${baseString}
    top: 0;
    border-bottom: ${ishalf ? (`1px`) : (px ? `${px}px` : `1px`)} solid ${color};
    color: ${color};
    transform-origin: 0 0;
    ${ishalf ? `transform: scaleY(0.5);`: ``}
  }
`

const setBottomLine = ({
  color,
  ishalf,
  px
}) => `
  &:after{
    ${baseString}
    bottom: 0;
    border-bottom: ${ishalf ? (`1px`) : (px ? `${px}px` : `1px`)} solid ${color};
    color: ${color};
    transform-origin: 0 0;
    ${ishalf ? `transform: scaleY(0.5);`: ``}
  }
`


const PxLine = (component) => {
  return styled(component)`
    ${is('setTopLine')`
      ${props => setTopLine({
        color: props.color || '#C7C7C7',
        ishalf: props.ishalf,
        px: props.px || '1'
      })}
    `}
    ${is('setBottomLine')`
      ${props => setBottomLine({
        color: props.color || '#C7C7C7',
        ishalf: props.ishalf,
        px: props.px || '1'
      })}
    `}
    ${is('customStyle')`
      ${props => props.customStyle}
    `}
  `
}



export default PxLine