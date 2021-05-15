// import React from 'react';
// import { mount, shallow, render } from 'enzyme';
import Alert from '@app/Alert/index.js';
import { AutoMath, ComponentRenderWithoutError } from '../testHelper';
import 'jest-styled-components';

// https://github.com/airbnb/enzyme/issues/1798 dive vs shallow
describe('Alert', () => {
  describe('behavior test', () => {
    it('render without error', () => {
      ComponentRenderWithoutError(Alert);
    });
    it('test props snapshot', () => {
      AutoMath(Alert, { type: 'success' }, 'here is a test alert');
    });
    it('test props type should be work', () => {
      const wrapper = mount(<Alert type="success">here is a test alert</Alert>);
      expect(wrapper.find('Alert')).toHaveStyleRule('color', 'rgb(20,86,35)');
    });

    it('test click close test', () => {
      const onClose = jest.fn();
      const wrapper = mount(
        <Alert canClose type="success" onClose={onClose}>
          here is a test alert
        </Alert>
      );
      wrapper.find('i').simulate('click');
      expect(onClose).toBeCalled();
      expect(wrapper.html()).toBe(null);
    });

    it('title should be render', () => {
      const wrapper = shallow(<Alert title="title test" />);
      expect(wrapper.text()).toEqual('title test');
    });

    it('test auto close', () => {
      jest.useFakeTimers();
      const onClose = jest.fn();
      const wrapper = shallow(
        <Alert autoClose closeTime={2000} title="title test" onClose={onClose} />
      );
      jest.advanceTimersByTime(3000);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(onClose).toBeCalled();
    });

    it('show can control render', () => {
      const wrapper = shallow(<Alert show={false} title="title test" />);
      expect(wrapper.type()).toBeNull();
      expect(wrapper.get(0)).toBeFalsy();
      // test null
      // https://stackoverflow.com/questions/47259061/jest-enzyme-test-a-react-component-that-returns-null-in-render-method
      wrapper.setProps({ show: true });
      expect(wrapper.get(0)).not.toBeFalsy();
      expect(wrapper.type()).not.toBeNull();
    });
  });
});
