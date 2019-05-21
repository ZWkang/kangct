import React from 'react'
import styled, { keyframes } from 'styled-components'
// import Animate from 'rc-animate'
import { fadeIn } from 'react-animations'


const fader = keyframes`${fadeIn}`;

const DialogMask = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ccc;
  animation: 1s ${fader} alternate;
  user-select: none;
`



const DialogContent = styled.div`
  position: fixed;
  z-index: 5000;
  width: 85%;
  top: 50%;
  left: 50%;
  min-height: 20%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
  animation: 1s ${fader} alternate;
`

class Dialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  onClick = () => {
    this.setState({
      show: !this.state.show
    })
  }
  close = () => {
    this.setState({
      show: false
    })
  }
  render() {
    const { show } = this.state
    return <div>
      <button onClick={this.onClick}>click me</button>
      {show ? <DialogMask onClick={this.close}/> : null }
      {show ? <DialogContent>{this.props.children}</DialogContent> : null }
    </div>
  }
}

export default Dialog
