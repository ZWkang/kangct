import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from '@app/Button/index.js';
import 'jest-styled-components';

describe('Button', () => {
  describe('bahavie test', () => {
    it('button should be render', () => {
      const wrapper = mount(<Button>content : here is my name </Button>);
      expect(wrapper.text()).toEqual('content : here is my name ');
    });

    it('expect render element type should be <button>', () => {
      const wrapper = mount(
        <div>
          <Button>test</Button>
        </div>
      );
      // console.log(wrapper);
      expect(wrapper.find('button').length).toEqual(1);
    });
  });

  describe('useage test', () => {
    it('it should pass props about onClick', () => {
      const handleOnClick = jest.fn();
      const wrapper = shallow(<Button onClick={handleOnClick}>test</Button>);
      wrapper.simulate('click');
      expect(handleOnClick).toBeCalled();
    });
    it('it should not emit onclick in disabled mode', () => {
      const handleOnClick = jest.fn();
      const wrapper = mount(
        <Button disabled={true} onClick={handleOnClick}>
          test
        </Button>
      );
      wrapper.simulate('click');
      expect(handleOnClick).not.toBeCalled();
    });
    it('size should be work', () => {
      const mediumBtn = mount(<Button medium />);
      const bigBtn = mount(<Button big />);
      expect(mediumBtn).not.toHaveStyleRule('font-size', '1em');
      expect(bigBtn).not.toHaveStyleRule('font-size', '1em');
    });
  });
});
