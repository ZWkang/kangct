// import React from 'react';
// import { mount, shallow, render } from 'enzyme';
import Flex from '@app/Flex/index.js';
import { AutoMath, ComponentRenderWithoutError } from '../testHelper';
import 'jest-styled-components';

// https://github.com/airbnb/enzyme/issues/1798 dive vs shallow
describe('Flex', () => {
  describe('behavior test', () => {
    it('render without error', () => {
      ComponentRenderWithoutError(Flex);
    });
    it('test props snapshot', () => {
      AutoMath(
        () => (
          <Flex center>
            <Flex.Item order={3} flexBasis="20%">
              20%
            </Flex.Item>
            <Flex.Item order={2} flexBasis="40%">
              40%
            </Flex.Item>
            <Flex.Item order={1} flexBasis="40%">
              40%
            </Flex.Item>
          </Flex>
        ),
        {},
        null
      );
    });
  });
  describe('Flex props setting test', () => {
    let wrapper = null;
    beforeAll(() => {
      wrapper = mount(<Flex />, {});
    });
    it('align', () => {
      wrapper.setProps({
        center: true
      });

      expect(wrapper.find(Flex)).toHaveStyleRule('align-items', 'center');
      expect(wrapper.find(Flex)).toHaveStyleRule('justify-content', 'center');
    });
    it('full', () => {
      wrapper.setProps({
        full: true
      });

      expect(wrapper.find(Flex)).toHaveStyleRule('width', '100%');
      expect(wrapper.find(Flex)).toHaveStyleRule('height', '100%');
    });
    it('alignItems', () => {
      wrapper.setProps({
        alignItems: 'flex-start'
      });

      expect(wrapper.find(Flex)).toHaveStyleRule('align-items', 'flex-start');
    });
  });
});
