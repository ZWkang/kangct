import React from 'react';
import styled, { css } from 'styled-components';
import BreadcrumbWrapper from './BreadcrumbWrapper';
import Icon from '../Icon/index';
import HomeImage from '../Icon/home.png';
import is from 'styled-is';

const BreadcrumbItemMixin = css`
  padding: 0 0.75em;
  cursor: pointer;
`;

const Alink = styled.a`
  color: #0275d8;
  text-decoration: none;
  ${BreadcrumbItemMixin}
  &:link {
    color: #0275d8;
  }
  &:visited {
    color: #0275d8;
  }
  &:hover {
    color: #014c8c;
    cursor: pointer;
    text-decoration: underline;
    outline-width: 0;
  }
  &:active {
    color: #0a0a0a;
    cursor: default;
    outline-width: 0;
  }
`;

const Span = styled.span.attrs((props) => {
  ariaCurrent: props.last ? 'page' : '';
})`
  ${BreadcrumbItemMixin}
`;

const LiCom = styled.li`
  display: inline;
  &:first-child a {
    padding-left: 0;
  }

  & + li:before {
    color: #cccccc;
    content: '\0002f';
  }

  ${is('hidden')`
    display: none;
  `}
`;

export { Span, Alink, LiCom };
