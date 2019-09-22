import Column from '@app/Column/index';
import { ComponentRenderWithoutError, AutoMath } from '../testHelper.js';

import 'jest-styled-components';

const TestCase = () => (
  <Column.Row>
    <Column md-is-6>md-is-6</Column>
    <Column md-is-6>md-is-6</Column>
  </Column.Row>
);

describe('Column', () => {
  describe('Column rendering', () => {
    it('without error', () => {
      ComponentRenderWithoutError(TestCase, {});
    });
    it('autoMatch snapshot', () => {
      AutoMath(TestCase, {}, null);
    });
  });
  describe('Column Interactions', () => {
    it('test column column size', () => {
      const wrapper = mount(
        <Column.Row>
          <Column is-6>is-6</Column>
          <Column is-6>is-6</Column>
          <Column is-1>is-1</Column>
          <Column is-2>is-2</Column>
          <Column is-3>is-3</Column>
          <Column is-4>is-4</Column>
          <Column is-5>is-5</Column>
          <Column is-6>is-6</Column>
          <Column is-7>is-7</Column>
          <Column is-8>is-8</Column>
          <Column is-9>is-9</Column>
          <Column is-10>is-10</Column>
          <Column is-11>is-11</Column>
          <Column is-12>is-12</Column>
        </Column.Row>
      );

      // expect(wrapper).
      // console.log(wrapper.debug());
      expect(wrapper.find(Column)).toHaveLength(14);
      expect(
        wrapper
          .find(Column)
          .at(0)
          .text()
      ).toEqual('is-6');
      expect(wrapper.find(Column)).toHaveStyleRule('flex', 'none');
      expect(wrapper.find(Column)).toHaveStyleRule('width', '50%');

      expect(wrapper.find(Column).at(9)).toHaveStyleRule('width', '66.666667%');
      expect(
        wrapper
          .find(Column)
          .at(9)
          .text()
      ).toEqual('is-8');
    });

    it('test column offset size', () => {
      const wrapper = mount(
        <Column.Row>
          <Column is-6>is-6</Column>
          <Column left-offset-3 is-3>
            offset-3
          </Column>
        </Column.Row>
      );

      expect(
        wrapper
          .find(Column)
          .at(1)
          .text()
      ).toEqual('offset-3');

      expect(wrapper.find(Column).at(1)).toHaveStyleRule('margin-left', '25%');
    });
    it('test Column gutter', () => {
      const wrapper = mount(<Column gutter={'8px'}></Column>);
      expect(wrapper).toHaveStyleRule('padding-left', '8px');
      expect(wrapper).toHaveStyleRule('padding-right', '8px');

      wrapper.setProps({
        gutter: '10px'
      });
      expect(wrapper).toHaveStyleRule('padding-left', '10px');
      expect(wrapper).toHaveStyleRule('padding-right', '10px');
    });
    it('test Column border', () => {});
  });

  describe('Column Interactions', () => {});
});
