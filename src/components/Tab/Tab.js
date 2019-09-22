import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TabsItem from './TabsItem';
import TabBody from './TabBody';
import Flex from '../Flex';

const TabsContainer = styled.div``;
const TabsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
/**
 * activeIndex Number
 * tabs: [{name: 'xx', body: <>} , xx]
 */

let wrapEvent = (handler, cb) => (event) => {
  handler && handler(event);
  if (!event.defaultPrevented) {
    return cb(event);
  }
};

const defaultRenderBody = ({ dataList, activeIndex }) => {
  return <TabBody />;
};
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: props.activeIndex || 0,
      focused: false
    };
  }
  handleTabKeyDown = (e) => {
    const { tabs } = this.props;
    switch (e.key) {
      case 'ArrowRight':
      case 'Right': {
        this.setState((prevState) => {
          const { selectIndex } = prevState;
          const count = tabs.length;

          const ensureIndex = (selectIndex + 1) % count;
          return {
            selectIndex: ensureIndex
          };
        });
        break;
      }
      case 'Left':
      case 'ArrowLeft': {
        this.setState((prevState) => {
          const { selectIndex } = prevState;
          const count = tabs.length;

          const ensureIndex = (selectIndex - 1 + count) % count;
          // console.log(selectIndex, count, ensureIndex);
          return {
            selectIndex: ensureIndex
          };
        });
        break;
      }
      case 'Home': {
        this.setState((prevState) => {
          return {
            selectIndex: 0
          };
        });
        break;
      }
      case 'End': {
        this.setState((prevState) => {
          return {
            selectIndex: tabs.length - 1
          };
        });
        break;
      }
      default: {
        break;
      }
    }
  };

  handleItemClick = (item) => {
    const { onSelect } = this.props;

    onSelect && onSelect();
    this.setState({
      selectIndex: item
    });
  };

  handleFocus = () => {
    // debugger;
    if (this.state.focused) return;
    // console.log()
    // debugger;
    this.setState({
      focused: true
    });
  };
  handleBlur = () => {
    this.setState({
      focused: false
    });
  };
  handleRenderBody = () => {
    const { activeIndex, renderBody, tabs } = this.props;
    const { selectIndex } = this.state;
    return (
      <Flex onClick={this.handleFocus} onFocus={this.handleFocus} onBlur={this.handleBlur}>
        {tabs.map((tab, index) => {
          const { body, name } = tab;
          return (
            <TabBody
              tabIndex={0}
              role="tabpanel"
              aria-labelledby={tab}
              key={index}
              display={index === selectIndex ? 'flex' : 'none'}
              hidden={index === selectIndex ? '' : 'hidden'}
              aria-labelledby={name}
              full
            >
              {body}
            </TabBody>
          );
        })}
      </Flex>
    );
  };
  render() {
    const { tabs } = this.props;
    return (
      <TabsContainer>
        <TabsWrapper onKeyDown={this.handleTabKeyDown}>
          {tabs.map((tab, index) => {
            const { body, name } = tab;
            const isSelect = index === this.state.selectIndex;
            // if (index === this.state.selectIndex) {
            return (
              <TabsItem
                key={'tab-' + name}
                aria-controls={'tab-' + name}
                aria-selected={isSelect}
                role="tab"
                tabIndex={isSelect ? 0 : -1}
                active={isSelect}
                onClick={this.handleItemClick.bind(this, index)}
                focused={this.state.focused}
              >
                {name}
              </TabsItem>
            );
          })}
        </TabsWrapper>
        {this.handleRenderBody()}
      </TabsContainer>
    );
  }
}

export default Tab;
