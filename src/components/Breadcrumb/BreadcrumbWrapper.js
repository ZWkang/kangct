import React from 'react';
import styled from 'styled-components';

const BreadcrumbDefaultCssString = `
  font-size: 16px;
  white-space: nowrap;
  display: block;

`;
const BreadcrumbWrapper = styled.nav.attrs({
  ariaLabel: 'Breadcrumb'
})`
  ${BreadcrumbDefaultCssString}
`;

const BreadcrumbColWrapper = styled.ol`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

export { BreadcrumbWrapper, BreadcrumbColWrapper };
