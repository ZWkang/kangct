import Card from '@app/Card/index';
import { ComponentRenderWithoutError, AutoMath } from '../testHelper';
import enzymify from 'expect-enzyme';

import 'jest-styled-components';
expect.extend(enzymify());

describe('Card', () => {
  describe('Card rendering', () => {
    it('without error', () => {
      ComponentRenderWithoutError(Card, {}, null);
    });
    it('auto match snapshot', () => {
      AutoMath(Card, {}, null);
    });
  });
  describe('Card Interactions', () => {
    it('should render the right component', () => {
      const Wrapper = (
        <Card>
          <Card.Header>here is a test Header</Card.Header>
          <Card.Body>here is a test Body</Card.Body>
          <Card.Footer>here is a test Footer</Card.Footer>
        </Card>
      );
      const wrapper = mount(Wrapper);
      ['Header', 'Footer', 'Body'].forEach((item) => {
        expect(wrapper.find(Card[item]).text()).toEqual(`here is a test ${item}`);
      });

      expect(wrapper.find(Card.Footer)).toHaveStyleRule('padding', '0.75rem 1.25rem');
      expect(wrapper.find(Card.Header)).toHaveStyleRule('padding', '0.75rem 1.25rem');
    });

    it('Card horizontal should be work', () => {
      const wrapper = mount(
        <Card horizontal>
          <Card.Header>here is a test Header</Card.Header>
          <Card.Body>here is a test Body</Card.Body>
          <Card.Footer>here is a test Footer</Card.Footer>
        </Card>
      );
      expect(wrapper.find(Card)).toHaveStyleRule('flex-direction', 'row');
    });
    it('Card align should be work', () => {
      const wrapper = mount(
        <Card align={'left'}>
          <Card.Header>here is a test Header</Card.Header>
          <Card.Body>here is a test Body</Card.Body>
          <Card.Footer>here is a test Footer</Card.Footer>
        </Card>
      );
      expect(wrapper.find(Card)).toHaveStyleRule('text-align', 'left');
      wrapper.setProps({ align: 'right' });
      expect(wrapper.find(Card)).toHaveStyleRule('text-align', 'right');
    });
  });
  describe('Card Interactions', () => {});
});

describe('Card#CardLink', () => {
  it('without error', () => {
    ComponentRenderWithoutError(Card.Link);
  });
  it('auto match snapshot', () => {
    AutoMath(Card.Link, {}, null);
  });

  it('render as a A link', () => {
    const link = mount(<Card.Link>test card link</Card.Link>);
    expect(link.find('CardLink').text()).toEqual('test card link');
  });
});
