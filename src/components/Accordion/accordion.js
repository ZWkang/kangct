import React from 'react';
import PropTypes from 'prop-types';
import Collapse from './collapse';
import { noop } from '../util/index.js';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    let activeKey = Array.isArray(props.activeKey) ? props.activeKey : [props.activeKey];
    this.state = {
      activeKey
    };
  }
  handlePanelClick = (key) => {
    let activeKey = this.state.activeKey;
    let Accordion = !this.props.accordion;
    // debugger
    if (Accordion) {
      // 手风琴模式只允许一个active
      let Active = ~activeKey.indexOf(key);
      if (Active !== 0) {
        activeKey.splice(~Active, 1);
      } else {
        activeKey.push(key);
      }
    } else {
      activeKey = activeKey[0] === key ? [] : [key];
    }
    this.setActiveKey(activeKey);
  };
  setActiveKey = (activeKey) => {
    this.setState({
      activeKey: activeKey
    });
    const propsActiveKey = this.props.accordion ? activeKey[0] : activeKey;
    this.props.onChange && this.props.onChange(propsActiveKey);
  };
  renderPanels = () => {
    const { children } = this.props;
    const { activeKey } = this.state;

    if (typeof children === 'function') {
      return children({
        activeKey: activeKey
      });
    }
    return React.Children.map(children, (child, index) => {
      if (!child) return;
      const key = child.key || Number(index);
      const Active = ~activeKey.indexOf(key) < 0 ? true : false;
      const { header, disabled } = child.props;
      const props = {
        ...child.props,
        header,
        disabled,
        Active,
        key,
        handlePanelClick: disabled ? () => {} : () => this.handlePanelClick(key)
      };
      return React.cloneElement(child, props);
    });
  };
  render() {
    const { children } = this.props;
    return <Collapse>{this.renderPanels()}</Collapse>;
  }
}

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { disabled, Active, shadow, key, handlePanelClick, header, children } = this.props;
    return (
      <React.Fragment>
        <Collapse.Item itemShadow={shadow}>
          <Collapse.ItemHeader onClick={handlePanelClick} disabled={disabled}>
            <Collapse.ItemHeaderTitle>{header}</Collapse.ItemHeaderTitle>
          </Collapse.ItemHeader>
          <Collapse.ItemContent show={Active}>{children}</Collapse.ItemContent>
        </Collapse.Item>
      </React.Fragment>
    );
  }
}
Panel.propTypes = {
  disabled: PropTypes.bool,
  Active: PropTypes.bool,
  shadow: PropTypes.bool,
  handlePanelClick: PropTypes.func,
  header: PropTypes.string,
  children: PropTypes.node
};
Panel.defaultProps = {
  disabled: false,
  Active: false,
  shadow: false,
  handlePanelClick: noop,
  header: '',
  children: null
};

Accordion.Panel = Panel;

// Accordion.propTypes =
Accordion.defaultProps = {
  activeKey: [],
  accordion: false,
  onChange: noop,
  icon: '',
  type: '',
  arrow: ''
};
/**
 * @components
 */
export { Accordion as default };
