import React from 'react'
import styled, { css } from 'styled-components'
import Breadcrumb from './index'
import Icon from '../Icon/index'
import HomeImage from '../Icon/home.png'



const BreadcrumbItemMixin = css`
  align-items: center;
  color: red;
  display: flex;
  justify-content: center;
  padding: 0 .75em;
`

const Alink = styled.a`
  ${BreadcrumbItemMixin}
  &:link{
    color: #ccc;
  }
  &:visited{
    color: #000;
  }
  &:hover{
    color: #0a0a0a;
    cursor: pointer;
  }
  &:active{
    color: #0a0a0a;
    cursor: default;
    pointer-events: none;
  }

`

const Span = styled.span`
  ${BreadcrumbItemMixin}
`

const LiCom = styled.li`
  align-items: center;
  display: flex;
  &:first-child a {
    padding-left: 0;
  }

  & + li:before {
    color: #cccccc;
    content: "\0002f"
  }
`


class BreadCrumbItem extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    const { children, conf } = this.props
    return (<Breadcrumb>
      <ul>
      {conf.map((value, index) => {
        // const Icon = value.Icon || <div></div>
        return (
          <LiCom key={index}>
            <Icon size-small customStyle={`
              background: red;
            `}><img src={HomeImage}></img></Icon>
            {/* <Icon/> */}
            {value.link ?(<Alink className={'is-active'}>{value.label}</Alink>) :  <Span>{value.label}</Span> }
          </LiCom>
        )
      })}
      </ul>
    </Breadcrumb>)
  }
}


export default BreadCrumbItem