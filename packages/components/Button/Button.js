import React, { Component } from 'react'
import styled from ''

/**
 * @example '../../../docs/button.md'
 */

export default function Button({children, name}) { // eslint-disable-line
  return <div>
    {{ children }} <br />
    content : here is my name {{ name }}
  </div>
}
// Button.propTypes = {}

