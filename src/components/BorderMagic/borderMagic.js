import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transformData } from '../util/index.js';
// import warning from 'warning';
import invariant from 'tiny-invariant';

const BASIC_SIZE = 10;

/**
 *
 * @param {Array} matrixArray 矩阵xy数组
 * @param {Number} normalSize 默认一个长度
 */
const calcBorderStyle = (matrixArray = [], normalSize = 10) =>
  matrixArray.map((v) => `${v[0] * normalSize}px ${v[1] * normalSize}px ${v[2]}`);

/**
 *
 * @param {Array} matrixArray 矩阵xy
 * @param {Boolean} bool choose x or y  x => true y => false
 */
const maxXorY = (matrixArray = [], bool = false) => {
  let theMaxOne = -Infinity;
  const theIndexInArray = bool ? 0 : 1;
  matrixArray.forEach((v, index) => {
    if (v.length < 3) throw new Error(`your matric array is error!!! index : ${index}`);
    if (v[theIndexInArray] > theMaxOne) theMaxOne = v[theIndexInArray];
  });
  return theMaxOne;
};

const BorderMagicWrapper = (props) => {
  const { isDoubleTwo, matrixArray, isDouble } = props;
  let useArray = null;
  if (isDouble) {
    const AccumulateNumber = !!isDoubleTwo ? 1 : 0;
    const maxX = maxXorY(matrixArray, true);
    useArray = matrixArray
      .map((v) => {
        return v.map((vc, index) => {
          if (index === 0) return vc + (maxX - vc) * 2 + AccumulateNumber;
          return vc;
        });
      })
      .concat(matrixArray);
  } else {
    useArray = matrixArray;
  }

  const BorderMagic = styled.div`
    border: ${props.borderStyle || '0px solid none'};
    position: relative;
    width: ${maxXorY(useArray, true) * props.normalSize}px;
    height: ${(maxXorY(useArray, false) + 1) * props.normalSize}px;
    &:before {
      position: absolute;
      content: ' ';
      top: 0;
      left: -${props.normalSize}px;
      width: ${props.normalSize || BASIC_SIZE}px;
      height: ${props.normalSize || BASIC_SIZE}px;
      box-shadow: ${calcBorderStyle(useArray, props.normalSize || BASIC_SIZE).join(',')};
    }
  `;

  return <BorderMagic {...props} />;
};

BorderMagicWrapper.defaultProps = {
  borderStyle: '0px solid none', // border默认为空
  matrixArray: [], // 坐标点数组
  normalSize: 1
};
BorderMagicWrapper.propTypes = {
  borderStyle: PropTypes.string,
  normalSize: PropTypes.number,
  matrixArray: PropTypes.arrayOf(PropTypes.array)
};

class BorderMagicCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrixArray: []
    };
  }
  async componentDidMount() {
    let { imageUrl, matrixArray } = this.props;
    invariant(imageUrl, '确认是否漏传imageUrl');
    matrixArray = matrixArray || (await transformData({ imageUrl }));
    this.setState({
      matrixArray
    });
  }
  render() {
    return <BorderMagicWrapper {...this.props} {...this.state} />;
  }
}

export default BorderMagicCom;
