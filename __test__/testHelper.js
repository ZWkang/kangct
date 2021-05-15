// import React from 'react';
import { mount, shallow, render } from 'enzyme';

function setUp(type, ...arg) {
  const [Component, props = {}, children = ''] = arg;
  if (~['mount', 'shallow', 'render'].indexOf(type)) {
    return global[type](<Component {...props}>{children}</Component>);
  }
}

export function AutoMath(Component, props = {}, children = '') {
  const wrapper = setUp('render', Component, props, children);
  expect(wrapper).toMatchSnapshot();
}

export function ComponentRenderWithoutError(Component, props = {}, children = '') {
  const wrapper = setUp('mount', Component, props, children);
  expect(() => {
    wrapper.setProps({});
    wrapper.unmount();
  }).not.toThrow();
}

export function childrenShouldBeProps(Component, children) {
  const wrapper = setUp('mount', Component, {}, children);

  expect(wrapper.get(0).props.children).toEqual(children);
}

export function setup(Component, props) {
  const wrapper = setUp(Component, props, null);
  return {
    wrapper,
    props
  };
}
