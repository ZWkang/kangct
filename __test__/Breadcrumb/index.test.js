import { shallow, mount } from 'enzyme';
import { AutoMath, ComponentRenderWithoutError } from '../testHelper';
import Breadcrumb from '@app/Breadcrumb/index';

describe('Breadcrumb', () => {
  describe('Breadcrumb rendering', () => {
    it('without error', () => {
      ComponentRenderWithoutError(Breadcrumb);
    });
    it('auto snapshot', () => {
      AutoMath(Breadcrumb);
    });
  });
  describe('Breadcrumb Interactions', () => {
    let didMount;
    let unmount;
    beforeAll(() => {
      didMount = jest.fn();
      unmount = jest.fn();
    });
    // afterAll(() => {
    //     didMount = null
    //     unmount = null
    // })
    it('lifecycle callback should work', () => {
      const wrapper = mount(<Breadcrumb didMount={didMount} unmount={unmount} />);
      expect(didMount).toBeCalled();
      wrapper.unmount();
      expect(unmount).toBeCalled();
    });
    it('render as a function shoule be work', () => {
      const breadsData = [
        {
          link: '/tets',
          title: 'test link',
          render: ({ link, index, title, last }) => {
            return <p key={index}>{title} is a joke</p>;
          },
          index: Math.random()
        }
      ];
      const wrapper = shallow(<Breadcrumb crumbs={breadsData} />);
      expect(wrapper.text()).toEqual('test link is a joke');
    });
  });
  describe('Breadcrumb Interactions', () => {});
});
