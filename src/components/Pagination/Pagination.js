import React, { Component } from 'react';
import styled from 'styled-components';
import is from 'styled-is';

const sizeMap = {
  normal: {
    fontSize: '1em',
    padding: '.7em .8em'
  },
  small: {
    fontSize: '.8em',
    padding: '.4em .6em'
  },
  large: {
    fontSize: '1.2em',
    padding: '.9em 1.1em'
  }
};
const PageItem = styled.a`
  position: relative;
  ${(props) => sizeMap[props.size] || sizeMap['normal']}
  font-size: 1rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  ${is('active')`
    background-color: rgba(0, 0, 0, 0.05);
  `}
  ${is('disabled')`
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  `}
`;
const PageItemWrapper = styled.li`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  position: relative;
  flex: 0 0 auto;
  align-items: center;
  user-select: none;
  :first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-left: 1px solid #ccc;
  }
  :last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: 1px solid #ccc;
  }
  :not(:first-child) {
    &::before {
      content: '';
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      width: 1px;
      background: #ccc;
    }
  }
`;

const PageContainer = styled.ul`
  list-style: none;
  display: inline-flex;
  padding: 0;
`;

const PageMinItemNumber = 6;

class PageSimple extends Component {
  constructor(props) {
    super(props);
  }
  ItemsRender() {
    const { currentPage, size, toNext, toPage, totalPages, startPage } = this.props;
    // console.log(currentPage);
    let ItemArray = [];
    if (currentPage - startPage <= 1) {
      ItemArray = [startPage, startPage + 1, startPage + 2];
    } else if (totalPages - currentPage <= 1) {
      ItemArray = [totalPages - 2, totalPages - 1, totalPages];
    } else {
      ItemArray = [currentPage - 1, currentPage, currentPage + 1];
    }
    const Items = ItemArray.map((item) => {
      return (
        <PageItemWrapper
          key={item}
          onClick={() => {
            toPage(item);
          }}
        >
          <PageItem
            active={currentPage === item}
            size={size}
            aria-current={item === currentPage ? 'true' : 'false'}
            aria-disabled="false"
            tabIndex="0"
            aria-label={`page ${item}`}
          >
            {' '}
            {item}{' '}
          </PageItem>
        </PageItemWrapper>
      );
    });
    return Items;
  }
  render() {
    return <React.Fragment>{this.ItemsRender()}</React.Fragment>;
  }
}

class Pagination extends Component {
  static defaultProps = {
    currentPage: 0,
    totalPages: 0,
    PrevText: '<',
    NextText: '>',
    size: 'normal'
  };
  constructor(props) {
    super(props);
    const currentPage = props.defaultActivePage > props.totalPages ? 1 : props.defaultActivePage;
    this.state = {
      currentPage
    };
  }
  toFirst = () => {
    this.setState({
      currentPage: 1
    });
  };
  toLast = () => {
    this.setState({});
  };
  toPage = (index) => {
    const { onPageChange } = this.props;
    if (!this.execLimitNumber(index)) return false;
    this.setState(
      {
        currentPage: index
      },
      () => {
        onPageChange && onPageChange(index);
      }
    );
  };
  renderToFirst = () => {
    const { size } = this.props;
    const { totalPages } = this.props;
    const { currentPage } = this.state;
    return (
      <PageItemWrapper onClick={this.toPrev}>
        <PageItem
          aria-current="false"
          aria-disabled={currentPage === 1 ? 'true' : 'false'}
          tabIndex="0"
          aria-label="Next item"
          size={size}
          disabled={currentPage === 1}
        >
          {' '}
          {'<'}{' '}
        </PageItem>
      </PageItemWrapper>
    );
  };
  execLimitNumber = (next) => {
    const { currentPage } = this.state;
    const { totalPages } = this.props;
    if (next === currentPage) return false;
    if (next < 1) return false;
    if (next > totalPages) return false;
    return true;
  };
  toNext = () => {
    const { currentPage } = this.state;
    this.toPage(currentPage + 1);
  };
  toPrev = () => {
    const { currentPage } = this.state;
    this.toPage(currentPage - 1);
  };
  renderToLast = () => {
    const { size } = this.props;
    const { totalPages } = this.props;
    const { currentPage } = this.state;
    return (
      <PageItemWrapper onClick={this.toNext}>
        <PageItem
          aria-current="false"
          aria-disabled={currentPage === totalPages ? 'true' : 'false'}
          tabIndex="0"
          aria-label="Next item"
          size={size}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </PageItem>
      </PageItemWrapper>
    );
  };
  renderMainCenter = () => {
    const { currentPage } = this.state;
    const { totalPages } = this.props;
    const { size } = this.props;
    let renderOneSection = (
      <PageItemWrapper
        key={'onesection'}
        onClick={() => {
          this.toPage(1);
        }}
      >
        <PageItem
          active={currentPage === 1}
          aria-current={currentPage === 1 ? 'true' : 'false'}
          aria-disabled="false"
          tabIndex="0"
          aria-label="First item"
          size={size}
        >
          {' '}
          {1}{' '}
        </PageItem>
      </PageItemWrapper>
    );
    let renderLastSection = (
      <PageItemWrapper
        key={'lastsection'}
        onClick={() => {
          this.toPage(totalPages);
        }}
      >
        <PageItem
          active={currentPage === totalPages}
          aria-current={currentPage === totalPages ? 'true' : 'false'}
          aria-disabled="false"
          tabIndex="0"
          aria-label="Last item"
          size={size}
        >
          {' '}
          {totalPages}{' '}
        </PageItem>
      </PageItemWrapper>
    );
    let ItemArray = [];
    if (currentPage > 1 && currentPage < totalPages) {
      if (currentPage - 1 > 2 && totalPages - currentPage > 2) {
        ItemArray = ['...', currentPage - 1, currentPage, currentPage + 1, '...'];
      } else if (currentPage - 1 <= 2) {
        ItemArray = [2, 3, 4, 5, '...'];
      } else if (totalPages - currentPage <= 2) {
        ItemArray = ['...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1];
      }
    } else {
      ItemArray =
        currentPage === 1
          ? [currentPage + 1, currentPage + 2, currentPage + 3, currentPage + 4, '...']
          : ['...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1];
    }
    let mainSection = ItemArray.map((item, index) => {
      if (typeof item === 'string') {
        return (
          <PageItemWrapper key={item + index}>
            <PageItem aria-current="false" aria-disabled="false" tabIndex="0" size={size}>
              {' '}
              {item}{' '}
            </PageItem>
          </PageItemWrapper>
        );
      } else {
        return (
          <PageItemWrapper
            key={item}
            onClick={() => {
              this.toPage(item);
            }}
          >
            <PageItem
              size={size}
              active={item === currentPage}
              aria-current={item === currentPage ? 'true' : 'false'}
              aria-disabled="false"
              tabIndex="0"
              aria-label={`page ${item}`}
            >
              {' '}
              {item}{' '}
            </PageItem>
          </PageItemWrapper>
        );
      }
    });
    return (
      <React.Fragment>
        {renderOneSection}
        {mainSection}
        {renderLastSection}
      </React.Fragment>
    );
  };

  render() {
    if (this.props.totalPages < PageMinItemNumber) {
      return (
        <PageContainer ariaLabel="Pagination Navigation" role="navigation">
          {this.renderToFirst()}
          <PageSimple
            currentPage={this.state.currentPage}
            toPage={this.toPage}
            totalPages={this.props.totalPages}
            startPage={1}
          />
          {this.renderToLast()}
        </PageContainer>
      );
    }
    return (
      <PageContainer ariaLabel="Pagination Navigation" role="navigation">
        {this.renderToFirst()}
        {this.renderMainCenter()}
        {this.renderToLast()}
      </PageContainer>
    );
  }
}
/**
 * @components
 */
export default Pagination;
