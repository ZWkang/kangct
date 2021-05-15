import React from 'react';
import { shallow, mount } from 'enzyme';
import Animate from '@app/Animate/index.js';
import { AutoMath, ComponentRenderWithoutError, childrenShouldBeProps } from '../testHelper';
import 'jest-styled-components';

function noop() {}
function createAnimateProps({
  funcName = 'bounce',
  duration = 2000,
  delay = 0,
  onAnimationEnd = noop,
  keyframesFunction = noop
}) {
  return {
    funcName,
    duration,
    delay,
    onAnimationEnd,
    keyframesFunction
  };
}
// 分成对应的describe
// 1. 测试渲染与快照
// 2. 测试UI控制，props传递，以及实际交互
// 3. 生命周期调用是否生效。

// 你希望在重构时候检查什么，就在这里写什么测试
describe('Animate Component', () => {
  it('render without error', () => {
    ComponentRenderWithoutError(Animate, {}, <p>asda</p>);
  });
  it('match snapshot', () => {
    AutoMath(Animate, { funcName: 'bounce', duration: 3000 }, <h1>here is a simple test</h1>);
  });
  it('test animation work?', () => {
    jest.useFakeTimers();

    const animationend = jest.fn();

    const wrapperProps = createAnimateProps({ onAnimationEnd: animationend });
    const wrapper = mount(
      <Animate {...wrapperProps}>
        <p>test</p>
      </Animate>
    );
    wrapper.simulate('animationend');
    expect(animationend).toBeCalled();
  });
  it('test more function name', () => {
    const bounceAnimationProps = createAnimateProps({ funcName: 'bounce' });

    const bounceAnimation = mount(<Animate {...bounceAnimationProps}>test</Animate>);
    expect(bounceAnimation.text()).toEqual('test');

    // console.log(bounceAnimation.debug());
    // console.log(bounceAnimation.get(0));
    expect(bounceAnimation.get(0).props.funcName).toEqual('bounce');
    const bounceInAnimationProps = createAnimateProps({ funcName: 'bounceIn' });

    const bounceInAnimation = mount(<Animate {...bounceInAnimationProps}>test</Animate>);
    expect(bounceInAnimation.text()).toEqual('test');

    expect(bounceInAnimation.get(0).props.funcName).toEqual('bounceIn');
  });

  it('children should be props', () => {
    childrenShouldBeProps(Animate, <p>test</p>);
  });
});
