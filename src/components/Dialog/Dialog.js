import DialogAnimate from './DialogAnimate';
import React from 'react';
import Protal from '../Protal';

class Dialog extends React.Component {
  render() {
    const { props } = this;
    return (
      <Protal>
        <DialogAnimate {...props}>{this.props.children}</DialogAnimate>
      </Protal>
    );
  }
}
/**
 * @component
 */
export default Dialog;
