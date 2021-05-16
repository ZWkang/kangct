// import React from 'react';
// import { mount, shallow, render } from 'enzyme';
import LazyLoad from '@app/LazyLoad/index.js';
import { AutoMath, ComponentRenderWithoutError } from '../testHelper';
import 'jest-styled-components';

const observe = jest.fn();
const unobserve = jest.fn();

// you can also pass the mock implementation
// to jest.fn as an argument
global.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve
}));

// https://github.com/airbnb/enzyme/issues/1798 dive vs shallow
describe('LazyLoad', () => {
  describe('behavior test', () => {
    it('render without error', () => {
      ComponentRenderWithoutError(LazyLoad);
    });
    it('test props snapshot', () => {
      AutoMath(
        LazyLoad,
        { imageUrl: 'https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1200x500.jpg' },
        null
      );
    });
  });
});
