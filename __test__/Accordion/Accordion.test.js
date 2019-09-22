import React from 'react';
import { mount, shallow } from 'enzyme';
import Accordion, { Collapse } from '@app/Accordion/index.js';
import { ComponentRenderWithoutError, AutoMath} from '../testHelper'
import 'jest-styled-components';

describe.skip('Accordion', () => {
  it('auto match snapshot', () => {
    const Wrapper = ((props) => (<Accordion accordion>
      <Accordion.Pannel header="SECTION 1">module 1</Accordion.Pannel>
      <Accordion.Pannel header="SECTION 2">module 2</Accordion.Pannel>
      <Accordion.Pannel header="SECTION 3">module 3</Accordion.Pannel>
    </Accordion>))
    AutoMath(Wrapper, {}, null)
  })
  it('without Error', () => {
    const Wrapper = ((props) => (<Accordion accordion>
      <Accordion.Pannel header="SECTION 1">module 1</Accordion.Pannel>
      <Accordion.Pannel header="SECTION 2">module 2</Accordion.Pannel>
      <Accordion.Pannel header="SECTION 3">module 3</Accordion.Pannel>
    </Accordion>))
    ComponentRenderWithoutError(Wrapper, {}, null)
  })
  it('Accordion accordion props default case ', () => {
    const AccordionActiveKey = mount(
      <Accordion accordion>
        <Accordion.Pannel header="SECTION 1">module 1</Accordion.Pannel>
        <Accordion.Pannel header="SECTION 2">module 2</Accordion.Pannel>
        <Accordion.Pannel header="SECTION 3">module 3</Accordion.Pannel>
      </Accordion>
    );
    const firstItem = AccordionActiveKey.find(Accordion).at(0);
    expect(firstItem.props().activeKey).toEqual([]);
    expect(firstItem.state().activeKey).toEqual([]);
  });
  it('Accordion accordion control active key', () => {
    const AccordionActiveKey = mount(
      <Accordion accordion activeKey={1}>
        <Accordion.Pannel header="SECTION 1">module 1</Accordion.Pannel>
        <Accordion.Pannel header="SECTION 2">module 2</Accordion.Pannel>
        <Accordion.Pannel header="SECTION 3">module 3</Accordion.Pannel>
      </Accordion>
    );
    const firstItem = AccordionActiveKey.find(Accordion).at(0);
    expect(firstItem.props().activeKey).toEqual(1);
    expect(firstItem.state().activeKey).toEqual([1]);

    AccordionActiveKey.find(Collapse.ItemHeader)
      .at(2)
      .simulate('click');

    expect(firstItem.state().activeKey).toEqual([2]);
  });

  it('Accordion accordion control muti key', () => {
    const AccordionActiveKey = mount(
      <Accordion activeKey={1}>
        <Accordion.Pannel header="SECTION 1">module 1</Accordion.Pannel>
        <Accordion.Pannel header="SECTION 2">module 2</Accordion.Pannel>
        <Accordion.Pannel header="SECTION 3">module 3</Accordion.Pannel>
      </Accordion>
    );
    const firstItem = AccordionActiveKey.find(Accordion).at(0);
    expect(firstItem.props().activeKey).toEqual(1);
    expect(firstItem.state().activeKey).toEqual([1]);

    AccordionActiveKey.find(Collapse.ItemHeader)
      .at(2)
      .simulate('click');

    expect(firstItem.state().activeKey).toEqual([1, 2]);
  });
});
