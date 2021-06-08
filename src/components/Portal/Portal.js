import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import useForceUpdate from './useForceUpdate';

function getElement(type) {
  if (typeof type === 'string') {
    return document.querySelector(type);
  } else if (type instanceof HTMLElement || (type && type.current instanceof HTMLElement)) {
    return type;
  } else {
    return null;
  }
}

function Portal(props) {
  const { children, target, customElementType = 'div' } = props;
  const parentNode = useRef(null);
  const isInsertNode = useRef(false);
  const forceUpdate = useForceUpdate();
  console.log(target, props);

  useEffect(() => {
    const element = getElement(target);
    if (!element) {
      parentNode.current = document.createElement(customElementType);
      document.body.appendChild(parentNode.current);
      isInsertNode.current = true;
    } else {
      parentNode.current = element;
      isInsertNode.current = false;
    }

    forceUpdate();

    return () => {
      if (isInsertNode.current) {
        document.body.removeChild(parentNode.current);
      }
    };
  }, [target]);

  return parentNode.current ? createPortal(children, parentNode.current) : null;
}
export default Portal;
