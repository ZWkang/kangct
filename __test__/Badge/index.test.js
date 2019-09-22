import Badge from '@app/Badge/index.js';
import { AutoMath, ComponentRenderWithoutError } from '../testHelper';
import 'jest-styled-components';

function createBadgeProps({ solid = false }) {
  return {
    solid
  };
}

function createBadgeWrapperProps({ content = '' }) {
  return { content };
}

describe('Badge', () => {
  describe('Badge rendering', () => {
    it('Badge rendering without error', () => {
      ComponentRenderWithoutError(Badge, createBadgeProps({}));
    });
    it('Badge snapshot', () => {
      AutoMath(Badge, createBadgeProps({}));
    });
    it('should contain Wrapper', () => {
      expect(Badge.Wrapper).not.toBeUndefined();
    });
  });
  describe('Badge Interactions', () => {
    it('render as <span>', () => {
      const badgewrapper = mount(<Badge>test</Badge>);
      expect(badgewrapper.find('span')).toHaveLength(1);
      expect(badgewrapper.find('div')).toHaveLength(0);
    });
    it('test props solid', () => {
      const badgewrapper = mount(<Badge>test</Badge>);

      expect(badgewrapper.find(Badge)).toHaveStyleRule('border', '1px solid #ccc');
      badgewrapper.setProps({ solid: true });
      expect(badgewrapper.find(Badge)).toHaveStyleRule('border', '0');
      expect(badgewrapper.find(Badge)).toHaveStyleRule('color', '#fff');
      expect(badgewrapper.find(Badge)).toHaveStyleRule('background', '#000');
    });
  });
  describe('Badge Lifecycle', () => {});
});

describe('Badge#Wrapper', () => {
  describe('Badge#Wrapper rendering', () => {
    it('Badge#Wrapper rendering without error', () => {
      ComponentRenderWithoutError(Badge.Wrapper, createBadgeProps({}));
    });
    it('Badge#Wrapper rendering without error', () => {
      //   ComponentRenderWithoutError(Badge.Wrapper, createBadgeProps({}));
      AutoMath(Badge.Wrapper, createBadgeProps({}));
    });
  });
  describe('Badge#Wrapper Interactions', () => {
    it('props content should be work', () => {
      const wrapper = mount(
        <Badge.Wrapper content="here is a test">
          <h1>test</h1>
        </Badge.Wrapper>
      );
      // console.log(wrapper.debug());
    });
  });
  describe('Badge#Wrapper Interactions', () => {});
});
