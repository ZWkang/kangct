import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import is from 'styled-is';

const colorMaps = {
  success: {
    bgColor: 'rgb(212, 237, 217);',
    color: 'rgb(20, 86, 35);',
    bdColor: 'rgb(194, 230, 202);'
  },
  info: {
    bgColor: 'rgb(208, 236, 240);',
    color: 'rgb(11, 84, 95);',
    bdColor: 'rgb(190, 228, 235);'
  },
  danger: {
    bgColor: 'rgb(248, 214, 217);',
    color: 'rgb(114, 27, 35);',
    bdColor: 'rgb(245, 198, 202);'
  },
  warning: {
    bgColor: 'rgb(255, 242, 205);',
    color: 'rgb(132, 100, 3);',
    bdColor: 'rgb(255, 237, 185);'
  },
  secondary: {
    bgColor: 'rgb(225, 227, 229);',
    color: 'rgb(56, 60, 65);',
    bdColor: 'rgb(225, 227, 229);'
  }
};

const handleAlertTypeColorChoose = (maps) => (name) => (props) => {
  let mapKey = props[name];
  const mapKeys = Object.keys(maps);
  if (~mapKeys.indexOf(mapKey) >= 0) {
    mapKey = mapKeys[0];
  }
  return css`
    ${Object.keys(maps[mapKey])
      .map((item, index, source) => {
        if (item === 'bgColor') {
          return `background-color: ${maps[mapKey][item]}`;
        }
        if (item === 'color') {
          return `color: ${maps[mapKey][item]}`;
        }
        if (item === 'bdColor') {
          return `border-color: ${maps[mapKey][item]}`;
        }
      })
      .filter(Boolean)
      .join('')}
  `;
};

const AlertWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  color: rgb(98, 37, 26);
  background-color: rgb(241, 218, 214);
  padding: 0.75rem 1.25rem;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 0.25rem;
  border-color: rgb(236, 204, 197);
  ${is('type')`
    ${handleAlertTypeColorChoose(colorMaps)('type')}
  `}
`;
const AlertClose = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  cursor: pointer;
  right: 16px;
`;
const AlertContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AlertTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 4px;
`;
const AlertMessage = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`;

/**
 * autoClose
 * closeTime
 * type
 * title
 * message
 * canClose
 * show
 * onclose
 */
class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show
    };
  }
  static defaultProps = {
    canClose: false,
    autoClose: false,
    type: 'info',
    title: '',
    show: true,
    closeTime: 2000
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      this.setState({
        show: nextProps.show
      });
    }
  }
  componentDidMount() {
    const { autoClose, closeTime = 2000 } = this.props;

    if (autoClose === true) {
      setTimeout(() => {
        this.handleAlertClose();
      }, closeTime);
    }
  }
  handleAlertClose = (e) => {
    const { onClose } = this.props;
    this.setState(
      {
        show: false
      },
      () => {
        onClose && onClose(e, this.state, this.props, this);
      }
    );
  };

  render() {
    const { title, message, canClose, children, type } = this.props;
    const { show } = this.state;
    if (!show) return null;
    return (
      <AlertWrapper type={type}>
        <AlertContentWrapper>
          <AlertTitle>{title}</AlertTitle>
          <AlertMessage>{message ? message : children}</AlertMessage>
        </AlertContentWrapper>
        {canClose ? <AlertClose onClick={this.handleAlertClose}>X</AlertClose> : null}
      </AlertWrapper>
    );
  }
}

Alert.propTypes = {
  canClose: PropTypes.bool,
  autoClose: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  show: PropTypes.bool,
  closeTime: PropTypes.number
};
export default Alert;
