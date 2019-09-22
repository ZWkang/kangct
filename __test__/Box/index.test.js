import Box from '@app/Box/index';
import { ComponentRenderWithoutError, AutoMath } from '../testHelper';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
describe('Box', () => {
  describe('Box rendering', () => {
    it('without error', () => {
      ComponentRenderWithoutError(Box);
    });
    it('snapshot', () => {
      AutoMath(Box);
    });
  });
  describe('Box Interactions', () => {
    it('it can pass click callback', () => {
      const mockClick = jest.fn();
      const wrapper = shallow(<Box onClick={mockClick}></Box>);
      // expect(wrapper)
      wrapper.simulate('click');
      expect(mockClick).toBeCalled();
      // expect(mockClick).toBeCalledTimes
      expect(mockClick.mock.calls.length).toBe(1);

      wrapper.simulate('click');

      expect(mockClick).toBeCalled();
      expect(mockClick.mock.calls.length).toBe(2);
    });
    it('it can pass hoverStyle', () => {
      const wrapper = shallow(<Box hoverStyle />);
      //   expect(wrapper).toHaveStyleRule('box-shadow', '0 1px 1px rgba(10,10,10,0.1),0 0 0 1px rgba(10,10,10,0.1)')
      expect(wrapper.props().hoverStyle).toBeTruthy();
    });
  });
  describe('Box Interactions', () => {});
});
