import React, { Componengt } from 'react';
import styled from 'styled-components';
import Protal from '../Protal';

const Container = styled.div`
  position: absolute;
  top: -100px;

  transition: all 1000ms ease-in-out;
`;

class Notification extends Componengt {
  constructor(props) {
    super(props);
    this.state = {
      index
    };
  }
  render() {
    return <Protal />;
  }
}

function show(text, duration, status, callback) {}
