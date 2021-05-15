import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import is from 'styled-is';

const Badge = styled.span`
  border-radius: 6px;
  font-size: 12px;
  margin-right: 8px;
  border-radius: 2px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  padding: 0 6px;
  color: #000;
  border: 1px solid #ccc;
  background: #eee;
  ${is('solid')`
    color: #fff;
    border: 0;
    background: #000;
  `}
`;

Badge.propsTypes = {
  solid: PropTypes.bool
};

const BadgeContainer = styled.div`
  position: relative;
  display: inline-flex;
  width: auto;
  height: auto;
`;
const BadgeContent = styled.div`
  position: absolute;
  top: -9px;
  right: -18px;
  border-radius: 6px;
  background: red;
  color: #fff;
  padding: 0 6px;
  font-size: 12px;
`;
const Wrapper = ({ children, content }) => {
  return (
    <BadgeContainer>
      {children}
      <BadgeContent>{content}</BadgeContent>
    </BadgeContainer>
  );
};
Wrapper.propsTypes = {
  children: PropTypes.node,
  content: PropTypes.node
};

Badge.Wrapper = Wrapper;

export default Badge;
