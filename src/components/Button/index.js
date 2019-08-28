import React from 'react';
import styled from 'styled-components';
import is from 'styled-is';

const noop = () => {};

const Button = styled.button.attrs((props) => ({
    disabled: props.disabled === true ? props.disabled : false,
    active: props.disabled === true ? props.active : false,
    role: 'botton',
    tabIndex: 0
}))`
    & + &{
        margin-left: 10px;
    }
    appearance: none;
    cursor: pointer;
    appearance: none;
    border-radius: 6px;
    padding: calc(.375em - 1px) .75em;
    line-height: 1.5;
    border: 1px solid #000;
    /* font-size: 16px; */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    transition: color,background-color,transform .5s;
    will-change: color,background-color,transform;
    ${is('full')`
        width: 100%;
    `}
    font-size: 1em;
    margin-bottom: .5em;
    outline: 0;
    ${is('hover')`
        :hover{
            background: #000;
            color: #fff;
            transform: matrix(1,0,0,1,0, -1);
        }
    `}
    /* user-select:none; */
    ${is('disabled')`
        cursor: not-allowed;
        background: #ccc;
        // pointer-events: none;
    `}
    ${is('small')`
        font-size: 0.75em;
    `}
    ${is('medium')`
        font-size: 1.25em;
    `}
    ${is('big')`
        font-size: 1.5em;
    `}
    ${is('shadow')`
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    `}
`;

/**
 * you can write some in here you know?
 *
 * @components
 */
export default Button;
