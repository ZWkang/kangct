import React, { Component } from 'react'
import styled from 'styled-components'

const Item = styled.li`
    display: flex;
    height: 36px;
    padding: 0 16px;
    line-height: 36px;
    color: #333;
    cursor: pointer;
    :hover {
        background: rgba(66,133,244,.08);
    }
`

const ItemTitle = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const HrLine = styled.div`
    height: 1px;
    overflow: hidden;
    background-color: #e7e7e7;
    line-height: 0;

`

class DropdownItem extends Component {
    constructor(props) {
        super(props)
    }
    handleItemClick = () => {
        const { onClick } = this.props
        onClick && onClick()
    }

    render() {
        const { title } = this.props
        if(title === '-') {
            return (
                <HrLine/>
            )
        }
        return (
            <Item onClick = {this.handleItemClick}>
                <ItemTitle>
                    {title}
                </ItemTitle>
            </Item>
        )
    }
}
export default DropdownItem