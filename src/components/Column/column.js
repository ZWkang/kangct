import React from 'react';
import styled, { css } from 'styled-components';
import is from 'styled-is';
const basicSizeWithColumn = 100 / 12;

const columnSizeMap = [
  'is-1',
  'is-2',
  'is-3',
  'is-4',
  'is-5',
  'is-6',
  'is-7',
  'is-8',
  'is-9',
  'is-10',
  'is-11',
  'is-12'
];
const splitMap = ['1-1'];
const defaultMargin = 0;
const defaultColumnsLimit = 12;
const offsetSize = ['left-offset-2'];

const CalculateColumnSize = ({ columnSize = defaultColumnsLimit, point = 1 }) => {
  return Math.round((point / columnSize) * 10 ** 8) / 10 ** 6;
};

const breakPoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
const sorts = {
  xs: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4
};

const GeneratorMedias = (props, filters) => {
  const template = (breakPoint, width = [], offset = []) => {
    if (breakPoint !== 0 && !breakPoint) return;
    return `
      @media (min-width: ${breakPoint}px) {
        ${width.join('')}
        ${offset.join('')}
      }
    `;
  };
  const mediaqueryString = filters
    .sort((prev, next) => sorts[prev.slice(0, 2)] - sorts[next.slice(0, 2)])
    .map((item) => {
      // md-is-1-3
      if (/\-is\-\d+\-\d+$/.test(item)) {
        let [type, ...rest] = item.split('-');
        const size = rest.join('-');
        const width = CalculateDefaultFlexColumn({ [size]: true }, [size]);
        return template(breakPoints[type], width);
      }
      // md-is-3
      if (/\-is\-\d+$/.test(item)) {
        let [type, ...rest] = item.split('-');
        const size = rest.join('-');
        const width = CalculateDefaultColumnCall({ [size]: true });
        return template(breakPoints[type], width);
      }
      // md-left-offset-3
      if (/\-.*\-offset\-\d+$/.test(item)) {
        let [type, ...rest] = item.split('-');
        const size = rest.join('-');
        const offset = CalculateOffsetSize({ [size]: true }, [size]);
        return template(breakPoints[type], '', offset);
      }
      // md-left-offset-2-3
      if (/\-.*\-offset\-\d+\-\d+$/.test(item)) {
        let [type, ...rest] = item.split('-');
        const size = rest.join('-');
        const width = CalculateDefaultFlexColumn({ [size]: true });
        return template(breakPoints[type], width);
      }
    })
    .filter(Boolean)
    .join('');
  return css`
    ${mediaqueryString}
  `;
};

const CalculateDefaultColumnCall = (props) => {
  const result = columnSizeMap.filter((v) => {
    return Boolean(props[v]) === true;
  });
  if (!result || result.length === 0) return '';
  let size = result[result.length - 1];
  let [, point] = size.split('-');
  let columnPercent = CalculateColumnSize({ columnSize: defaultColumnsLimit, point: point });
  return css`
    flex: none;
    width: ${columnPercent}%;
  `;
};
const RegexpFilter = (val) => (cb) => (props) =>
  cb(
    props,
    Object.keys(props).filter((item) => val.test(item))
  );

const CalculateOffsetSize = (props, filters) => {
  if (filters.length <= 0) return;

  const readySplit = filters[filters.length - 1];

  const [direction, , point, columnSize] = readySplit.split('-');

  let blockDirection = 'margin-right';
  if (direction === 'left') {
    blockDirection = 'margin-left';
  }

  let columnPercent = CalculateColumnSize({ columnSize: columnSize, point: point });
  return `
    ${blockDirection} :${columnPercent}%;
  `;
};

const CalculateDefaultFlexColumn = (props, val) => {
  if (val.length === 0) return;
  const readySplit = val[val.length - 1];
  const [, point, columnSize] = readySplit.split('-');

  let columnPercent = CalculateColumnSize({ columnSize: columnSize, point: point });
  return css`
    flex: none;
    width: ${columnPercent}%;
  `;
};

const getProps = (val) => (props) => props[val];
const Column = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 1px;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  float: left;
  &:after {
    clear: both;
    content: ' ';
    display: table;
  }

  ${CalculateDefaultColumnCall}
  ${is('gutter')`
    padding-left: ${getProps('gutter')}
    padding-right: ${getProps('gutter')}
  `}
  ${is('border')`
    border: 1px solid #ddd;
  `}
  ${RegexpFilter(/^is-\d{0,2}\-\d{0,2}/i)(CalculateDefaultFlexColumn)}
  ${RegexpFilter(/^(left|right)-offset-\d{1,5}(-\d{1,5})?$/i)(CalculateOffsetSize)}
  ${RegexpFilter(/(xs|sm|md|lg|xl)/i)(GeneratorMedias)}
`;

Column.Row = styled.div`
  display: block;
  margin: 0 -0.75rem;
`;
/**
 * @components
 */
export default Column;
