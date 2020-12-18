import DialogAnimate from './DialogAnimate';
import React from 'react';
import Portal from '../Portal';
import DialogContent from './DialogCntent';
import DialogTitle from './DialogTitle';
class Dialog extends React.Component {
  render() {
    const { props } = this;
    return (
      <Portal>
        <DialogAnimate {...props}>{this.props.children}</DialogAnimate>
      </Portal>
    );
  }
}

Dialog.DialogContent = DialogContent;

Dialog.DialogTitle = DialogTitle;

/**
 * @components
 */
export default Dialog;
