import React from 'react';
import styled, { css } from 'styled-components';
import is, { isNot } from 'styled-is';
import Group from './group';

const ButtonFocusZIndex = 111;
const BtnBaseStyle = css`
  font-family: inherit;
  font-size: 1em;

  cursor: pointer;

  appearance: none;
  border-radius: 6px;
  padding: calc(0.375em - 1px) 0.75em;
  line-height: 1.5;
  border-width: 1px;
  border-style: solid;
  border-color: #dbdbdb;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  vertical-align: top;

  transition: color, background-color, transform 0.5s;
  will-change: color, background-color, transform;

  margin-bottom: 0.5em;
  outline: 0;

  text-decoration: none;
`;

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
    border-radius: 6px;
    padding: calc(0.375em - 1px) 0.75em;

    line-height: 1.5;
    border-width: 1px solid #dbdbdb;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    vertical-align: top;

    margin-bottom: 0.5em;

    text-decoration: none;

    font-size: 1em;

    :not(:disabled):hover{
        opacity: 0.9;
    }

    :not(:disabled):hover,
    :not(:disabled):active{
        /* box-shadow: 0 0 0 0.125em rgba(50,115,220,.2); */
        border-color: #4a4a4a;
        color: #363636;
    }

    /* TODO: 颜色反相 */
    /* ${is('hover')`
        :not(:disabled):hover{
            background: #000;
            // color: #fff;
            transform: matrix(1,0,0,1,0, -1);
        }
    `} */

    :not(:disabled):active {
        border-color: #4a4a4a;
        opacity: 1;
    }

    :not(:active):focus {
        border-color: #3273dc;
        color: #363636;
        position: relative;
        box-shadow: 0 0 0 0.125em rgba(50,115,220,.2);
        /* outline: 2px auto rgba(19,124,189,.6);
        outline-offset: 2px; */
        /* z-index: ${ButtonFocusZIndex}; */
        z-index: 2;
    }

    /* user-select:none; */
    ${is('disabled')`
        cursor: not-allowed;
        background: #ccc;
        opacity: 0.8;
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
    ${is('full')`
        width: 100%;
    `}
`;
Button.Group = Group;
/**
 * you can write some in here you know?
 *
 * @components
 */
export { Button as default };
