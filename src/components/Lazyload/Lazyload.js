import React, { useState, useRef, useEffect } from 'react';
import ImageComponent from '../ImageComponent';

const Lazyload = (props) => {
  const { imageUrl, type = 'img' } = props;
  const lazyLoadRef = useRef();
  const onScreen = useOnScreen({ ref: lazyLoadRef, rootMargin: '0px' });
  if (type !== 'img') {
    const childProps = {
      ...props,
      children: onScreen ? props.children : null
    };
    return <ImageComponent ref={lazyLoadRef} {...childProps} type={type}></ImageComponent>;
  }
  return (
    <ImageComponent
      ref={lazyLoadRef}
      {...props}
      type={type}
      src={onScreen ? imageUrl : undefined}
    ></ImageComponent>
  );
};

function useOnScreen({ ref, rootMargin }) {
  const [isInteresting, setIsInteresting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInteresting(entry.isIntersecting);
        }
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isInteresting;
}

/**
 * @components
 */

export { Lazyload as default };
