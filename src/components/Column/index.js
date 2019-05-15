import React from 'react'
import styled, { css } from 'styled-components'
import Flex from '../Flex'
import is from 'styled-is'

const basicSizeWithColumn = 100 / 12

const map = ['is-1','is-2','is-3','is-4','is-5','is-6','is-7','is-8','is-9','is-10','is-11','is-12']
const change = (props) => {
  const result = map.filter((v) => {
    return Boolean(props[v]) === true
  })
  console.log(result)
  if (!result || result.length === 0) { return }
  const splitValue = result[result.length - 1].split('-')
  const trueValue = splitValue[splitValue.length - 1]
  console.log(`width: ${Number(trueValue) * basicSizeWithColumn}%;`)
  return `flex: none; width: ${Number(trueValue) * basicSizeWithColumn}%;`
}

// const offsetSizeMap = ['is-1','is-2','is-3','is-4','is-5','is-6','is-7','is-8','is-9','is-10','is-11','is-12']

const offsetSize = (props) => {
  const result = Object.keys(props).filter((v) => {
    return /^.*?\-offset-(?=(\d+))/.test(v)
  })
  // console.log(result)
  if (!result || result.length === 0) { return }
  const splitValue = result[result.length - 1].split('-')
  const trueValue = splitValue[splitValue.length - 1]
  console.log(`width: ${Number(trueValue) * basicSizeWithColumn}%;`)
  return `margin-left: ${Number(trueValue) * basicSizeWithColumn}%;`
}

const Column = styled(Flex)`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: .75rem;
  ${change}
  ${offsetSize}
  ${is('is-narrow')`
    flex: none;
  `}
`


export default Column