import DialogAnimate from './DialogAnimate';
import React from 'react';
import Protal from '../Protal';
import DialogContent from './DialogCntent';
import DialogTitle from './DialogTitle';
class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    };
    close = () => {
        this.setState({
            show: false
        });
    };
    render() {
        const { show } = this.state;
        return (
            <div>
                <button onClick={this.onClick}>click me</button>
                {show ? <DialogMask onClick={this.close} /> : null}
                {show ? <DialogContent>{this.props.children}</DialogContent> : null}
            </div>
        );
    }
}

Dialog.DialogContent = DialogContent;

Dialog.DialogTitle = DialogTitle;

/**
 * @components
 */
export default Dialog;
