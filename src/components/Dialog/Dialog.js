import DialogAnimate from './DialogAnimate';
import React from 'react';
import Protal from '../Protal';
import DialogContent from './DialogCntent';
import DialogTitle from './DialogTitle';
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

Dialog.DialogContent = DialogContent;

Dialog.DialogTitle = DialogTitle;

/**
 * @components
 */
export default Dialog;
