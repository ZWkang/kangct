import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import is from 'styled-is';

const TabsItem = styled.li`
  box-sizing: border-box;
  display: inline-block;
  color: #ccc;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  cursor: pointer;
  position: relative;
  font-size: 18px;
  margin-right: 5px;
  :after {
    content: '';
    width: 0;
    background: #000;
    height: 2px;
    position: absolute;
    left: 100%;
    bottom: 0;
    transition: all 0.4s;
  }
  ${is('active')`
        color: #333;
        :after {
          width: 100%;
          left: 0;
          transition-delay: 0.1s;
        }
        & ~ li::after {
          left: 0;
        }
    `}
`;

const TabsItemWrapper = (props) => {
  const { active } = props;
  const node = useRef(false);

  function checkRefFocus() {
    if (active && node.current) {
      node.current.focus();
    }
  }
  useEffect(() => {
    checkRefFocus();
  }, [props.active]);

  return <TabsItem {...props} ref={node} />;
};

/**
 * @component
 */
export default TabsItemWrapper;
