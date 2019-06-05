import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DropdownItem from './DropdownItem';
import Rect from '../Rect';
import { UlContainer } from './DropdownWrapper';
import enhanceWithClickOutside from 'react-click-outside';

const Temp = styled.div`
  position: relative;
  text-align: left;
  padding: 0 6px;
  cursor: pointer;
`;
function noop() {}
function defaultRenderTitle({ title }) {
  return <span>{title}</span>;
}
class Dropdown extends Component {
  static defaultProps = {
    show: false,
    list: [],
    onClick: noop
  };
  constructor() {
    super();
    this.dropdown = React.createRef();
    this.state = {
      dropdownShow: false
    };
  }
  handleTitleClick = () => {
    const { dropdownShow } = this.state;
    this.setState({
      dropdownShow: !dropdownShow
    });
  };
  registerEvents = () => {
    let { trigger } = this.props;
    if (typeof trigger === 'string') {
      trigger = [trigger];
    }
    trigger.map((triggerItem) => {
      this.dropdown.current.addEventListener(triggerItem, this.triggerEvent, false);
    });
  };
  triggerEvent = (e) => {
    const { dropdownShow } = this.state;
    e && e.preventDefault();
    this.setState({
      dropdownShow: !dropdownShow
    });
  };
  componentDidMount() {
    this.registerEvents();
  }
  handleClickOutside = () => {
    if (this.state.dropdownShow) {
      this.setState({
        dropdownShow: false
      });
    }
  };
  renderTitle = () => {
    const { renderTitle, title } = this.props;
    if (typeof renderTitle === 'function') {
      return renderTitle({
        title: title
      });
    }
    return defaultRenderTitle({
      title: title
    });
  };
  handleItemClick = () => {};
  render() {
    const { title } = this.props;
    const { dropdownShow } = this.state;
    return (
      <Temp ref={this.dropdown}>
        {this.renderTitle()}
        <Protal>
          <Rect target={this.dropdown} show={dropdownShow}>
            {({ left, top, height }) => {
              return (
                <div
                  style={{
                    position: 'absolute',
                    top: top + height + 'px',
                    left: left + 'px',
                    display: 'block',
                    display: dropdownShow ? '' : 'none'
                  }}
                >
                  <UlContainer style={{ padding: '0' }}>
                    {['test', 'xxx'].map((item) => {
                      return <DropdownItem title={item} />;
                    })}
                  </UlContainer>
                </div>
              );
            }}
          </Rect>
        </Protal>
      </Temp>
    );
  }
}

/**
 * @components
 */
export default enhanceWithClickOutside(Dropdown);
