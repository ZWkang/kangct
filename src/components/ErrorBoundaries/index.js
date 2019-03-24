import React, { Component, Fragment } from 'react'

import styled from 'styled-components'


const defaultCallback = function (a, b, c) {}

const DefaultFallBackComponent = ({ props }) => {
    return <div>
        <div style={{color: 'red'}}>
            {props.error}
        </div>
        <div style={{color: 'red'}}>
            {props.componentStack.toString()}
        </div>
    </div>
}

class ErrorBoundaries extends Component {
    constructor (props) {
        super(props)
        this.state = {
            error: null,
            info: null
        }
    }
    componentDidCatch = (error, info) => {
        const { ErrorCallback = defaultCallback } = this.props
        try {
            ErrorCallback(this, error, info)
        } catch (err) {
            this.setState({
                error: err,
                info
            })
        }
    }
    render() {
        const { children, FallBackComponent = DefaultFallBackComponent, ...restProps } = this.props
        const { error, info } = this.state
        if (error) {
            return (<FallBackComponent error componentStack={info.componentStack}/>)
        }
        return <Fragment>{children}</Fragment>
    }
}

export default ErrorBoundaries