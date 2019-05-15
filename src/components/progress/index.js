import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const mainColor = '#29d';

const SimpleDiv = styled.div`
  pointer-events: none;
`
const DivItem = styled.div`
  background: ${mainColor};
  position: fixed;
  z-index: 1088;
  top: 0;
  left: 0;
  width: ${props => props.present}%;
  height: 2px;
  transition: width 2s;
`


// 亮色
const ProgressLine = styled.div` 
  display: block;
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;
  box-shadow: 0 0 10px ${mainColor}, 0 0 5px ${mainColor};
  opacity: 1;
  transform: rotate(0deg) translate(0px, -4px);
`
// transform: translate3d(-0.6%, 0px, 0px);
//     transition: all 200ms ease 0s;

const GeneratorLoadingItem = ({ present }) => {
  present = present < 0 ?
                          0 : 
                          present > 100 ? 
                            88 : 
                            present;
  return (
    <SimpleDiv>
      <DivItem present={present}>
        <ProgressLine></ProgressLine>
      </DivItem>
    </SimpleDiv>
  )
}

GeneratorLoadingItem.propTypes = {
  present: PropTypes.number
}
export default GeneratorLoadingItem