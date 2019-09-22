import 'jest-styled-components';
import Dropdown from '@app/Dropdown/index';
import DropdownItem from '@app/Dropdown/DropdownItem';
import { ComponentRenderWithoutError, AutoMath } from '../testHelper.js';

jest.mock('../../src/components/Rect/index.js', () => (props) => {
  const { children } = props;

  return children({
    left: 750,
    top: 320,
    height: 300
  });
});
jest.mock('../../src/components/Protal/index.js', () => (props) => {
  return <div>{props.children}</div>;
});

// jest.mock('installComponent', () => ({
//   InstallCom: 'mockInstallCom'
// }));

describe('Dropdown', () => {
  describe('Dropdown rendering', () => {
    // <Dropdown
    //   list={['item1', 'item2']}
    //   title={'click me please'}
    //   trigger={['click']}
    //   onClick={(item, e) => {
    //     console.log(item);
    //   }}
    // />;
    it('without error', () => {
      ComponentRenderWithoutError(
        Dropdown,
        {
          list: ['item'],
          title: 'test',
          trigger: ['click'],
          onClick: jest.fn()
        },
        null
      );
    });
    it('auto snapshot', () => {
      const wrapper = shallow(<Dropdown></Dropdown>, {
        list: ['item'],
        title: 'test',
        trigger: ['click'],
        onClick: jest.fn()
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Dropdown Interactions', () => {
    it('Dropdown item click', () => {
      const mockClickFn = jest.fn();
      const DropdownProps = {
        list: ['item'],
        title: 'test',
        trigger: ['click'],
        onClick: mockClickFn
      };
      const wrapper = mount(<Dropdown {...DropdownProps}></Dropdown>);

      wrapper
        .find(DropdownItem)
        .at(0)
        .simulate('click');
      expect(mockClickFn).toBeCalled();
      expect(mockClickFn).toHaveBeenCalledTimes(1);
    });
  });
  describe('Dropdown Interactions', () => {});
});
