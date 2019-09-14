import React from 'react';
import styled from 'styled-components';
import is from 'styled-is';

// https://github.com/facebook/prop-types/issues/200
// forward ref should be notice

const Collapse = styled.section`
  text-align: left;
  border: 1px solid #d9d9d9;
  border-bottom: 0;
  border-radius: 3px;
  font-size: 14px;
`;

Collapse.Item = styled.div`
  ${is('itemShadow')`
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  `}
  border-bottom: 1px solid #d9d9d9;
`;

Collapse.ItemHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  padding: 12px 0 12px 16px;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  ${is('disabled')`
    cursor: not-allowed;
  `}
`;
Collapse.ItemHeaderTitle = styled.div`
  flex: auto;
  line-height: 1;
`;
Collapse.ItemContent = styled.div`
  display: block;
  width: 100%;
  transition: all 0.2s ease-out;
  height: 0;
  transform-origin: top;
  padding: 0 16px;
  color: rgba(0, 0, 0, 0.65);
  overflow: hidden;
  box-sizing: border-box;
  ${is('show')`
    padding: 16px;
    height: auto;
    width: 100%;
    border-top: 1px solid #d9d9d9;
  `}
`;

export default Collapse;
