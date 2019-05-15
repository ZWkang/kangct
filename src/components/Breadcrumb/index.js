import React from 'react'
import styled from 'styled-components'
import is from 'styled-is'

const BreadcrumbDefaultCssString = `
  font-size: 16px;
  white-space: nowrap;
  user-select: none;
  display: block;
  ul,
  ol{
    align-items: flex-start
    display: flex
    flex-wrap: wrap
    justify-content: flex-start
  }
`
const BreadcrumbWrapper = styled.div`
  ${BreadcrumbDefaultCssString}
`

export default BreadcrumbWrapper