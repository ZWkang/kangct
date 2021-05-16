// import React from 'react';
// import { mount, shallow, render } from 'enzyme';
import Hero from '@app/Hero/index.js';
import { AutoMath, ComponentRenderWithoutError } from '../testHelper';
import 'jest-styled-components';
import { mount } from 'enzyme';

// https://github.com/airbnb/enzyme/issues/1798 dive vs shallow
describe('Alert', () => {
  describe('behavior test', () => {
    it('render without error', () => {
      ComponentRenderWithoutError(Hero);
    });
    it('test props snapshot', () => {
      AutoMath(
        () => {
          return (
            <Hero>
              <Hero.HeroBody>
                <Hero.HeroLeft>
                  <Hero.HeroH1>hero</Hero.HeroH1>
                </Hero.HeroLeft>
                <Hero.HeroRight>
                  <img src="https://cdn.pixabay.com/photo/2016/09/02/08/32/cuba-1638594_960_720.jpg" />
                </Hero.HeroRight>
              </Hero.HeroBody>
            </Hero>
          );
        },
        {},
        'here is a test alert'
      );
    });
  });
  describe('HeroBody behavior test', () => {
    it('render without error', () => {
      ComponentRenderWithoutError(Hero.HeroBody);
    });
    it('test props snapshot', () => {
      AutoMath(Hero.HeroBody, { medium: true, large: false }, 'here is a test alert');
    });

    it('medium size', () => {
      const Component = <Hero.HeroBody medium={true} />;
      const mountedComponent = mount(Component);

      expect(mountedComponent.find(Hero.HeroBody)).toHaveStyleRule('padding', '5em 2.5em');
    });

    it('large size', () => {
      const Component = <Hero.HeroBody large={true} />;
      const mountedComponent = mount(Component);

      expect(mountedComponent.find(Hero.HeroBody)).toHaveStyleRule('padding', '6em 3em');
    });
  });
});
