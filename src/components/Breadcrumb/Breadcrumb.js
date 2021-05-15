import React from 'react';
import { BreadcrumbWrapper, BreadcrumbColWrapper } from './BreadcrumbWrapper';
import { Span, Alink, LiCom } from './BreadcrumbItem';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.didMount) {
      this.props.didMount();
    }
  }
  componentWillUnmount() {
    if (this.props.unmount) {
      this.props.unmount();
    }
  }
  handleCrumbRender = ({ link, index, title, render, last }) => {
    if (typeof render === 'function') {
      return render({ link, index, title, last });
    }
    const currentPage = last ? { 'aria-current': 'page' } : {};
    if (!link) {
      return (
        <LiCom key={index}>
          <Span {...currentPage}>{title}</Span>
        </LiCom>
      );
    }
    return (
      <LiCom key={index}>
        <Alink href={link} {...currentPage}>
          {title}
        </Alink>
      </LiCom>
    );
  };
  render() {
    const { crumbs } = this.props;
    return (
      <BreadcrumbWrapper>
        <BreadcrumbColWrapper>
          {crumbs.map(({ link, title, render }, index) => {
            let last = false;
            if (index === crumbs.length - 1) {
              last = true;
            }
            return this.handleCrumbRender({ link, title, index: index, render, last });
          })}
        </BreadcrumbColWrapper>
      </BreadcrumbWrapper>
    );
  }
}
Breadcrumb.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      // link: PropTypes.oneOf(PropTypes.string, PropTypes.bool),
      title: PropTypes.string.isRequired,
      render: PropTypes.Function
    })
  )
};
Breadcrumb.defaultProps = {
  crumbs: []
};
/**
 * @components
 */
export default Breadcrumb;
