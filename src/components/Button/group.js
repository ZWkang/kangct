import React, { Component } from 'react';
import styled from 'styled-components';
import is, { isNot } from 'styled-is';

const Group = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    margin-left: 0!important;
    margin-right: 0;
    min-height: 2em;
    height: auto;
  }
  > *:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  ${isNot('vertical')`
    > *:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    > *:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
  `}

  ${is('vertical')`
    width: auto;
    flex-direction: column;
    > * {
        margin-top: 0!important;
        margin-bottom: 0!important;
        flex: 0 0 100%;
    }
    > *:first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    > *:last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
  `}
  ${is('width')`
    width: ${(props) => props.width};
  `}
`;

export default Group;
