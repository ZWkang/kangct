import React from 'react'
import styled from 'styled-components'

// from https://github.com/sofish/typo.css/blob/master/typo.css
const BaseHeading = css`
    margin: 0;
    padding: 0;
`

const resetHTML5Tag = css`
    display: block;
`

const mediaTag = css`
    display: inline-block;
`

const formItem = css`
    font: 300 1em/1.8 PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
`



const Blockquote = css`
    ${BaseHeading}
    position: relative;
    color: #999;
    font-weight: 400;
    border-left: 1px solid #1abc9c;
    padding-left: 1em;
    margin: 1em 3em 1em 2em;
    @media only screen and ( max-width: 640px ) {
        margin: 1em 0;
    }
`


const Acronym = css`
    border-bottom: 1px dotted;
    font-variant: normal;
    text-decoration: none;
`
const Abbr = css`
    ${Acronym}
    cursor: help;
`

const Del = css`
    text-decoration: line-through;
`


const HTitleBase = css`
  font-family: PingFang SC, Verdana, Helvetica Neue, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
  font-weight: 100;
  color: #000;
  line-height: 1.35;


  margin-top: 1.2em;
  margin-bottom: 0.6em;
  line-height: 1.35;
`

const H1 = styled.h1`
    ${HTitleBase}
    font-size: 2em;
`

const H2 = styled.h2`
    ${HTitleBase}
    font-size: 1.8em;
`

const H3 = styled.h3`
    ${HTitleBase}
    font-size: 1.6em;
`

const H4 = styled.h4`
    ${HTitleBase}
    font-szie: 1.4em;
`

const H5 = styled.h5`
    ${HTitleBase}
    font-size: 1.2em;
`

const H6 =  styled.h6`
    ${HTitleBase}
    font-size: 1.2em;
`

const Mark = styled.mark`
    background: #fffdd1;
    border-bottom: 1px solid #ffedce;
    padding: 2px;
    margin: 0 5px;
`

export default {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
}