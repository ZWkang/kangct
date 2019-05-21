import React, { Component } from 'react'
import is from 'styled-is'
import styled, { css } from 'styled-components'
import Triangle from './Triangle'

const ToolTipsWrapper = styled.div`
  position: relative;
`



// const ToopTips = (props) => {

class ToopTips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toolTipShow: false
    }
  }
  handleClickAction = () => {
    this.setState(prevState => ({
      toolTipShow: !prevState.toolTipShow
    }))
  }
  render() {
    const { toolTipShow } = this.state
    const Content = React.cloneElement(this.props.children, {
      onClick: this.handleClickAction
    })
    console.log(this.props.children)
      return <ToolTipsWrapper>
      { Content }
      { toolTipShow ? <Triangle rorate={this.props.rorate}>asdasd</Triangle> : null }
    </ToolTipsWrapper>
  }
}

export default ToopTips