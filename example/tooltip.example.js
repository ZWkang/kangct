import React from 'react';
import Button from '@app/components/Button';
import ToolTips from '@app/components/ToolTips';
class ToolTipsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.btnRef = null;
  }
  render() {
    return (
      <Button
        style={{
          padding: '5px 10px',
          backgroundColor: 'white'
        }}
        ref={(ref) => (this.btnRef = ref)}
        onMouseOver={() => {
          this.setState({
            show: true
          });
        }}
        onMouseLeave={() => {
          this.setState({
            show: false
          });
        }}
      >
        tooltip in the {this.props.position}
        <ToolTips show={this.state.show} target={this.btnRef} position={this.props.position}>
          {this.props.children}
        </ToolTips>
      </Button>
    );
  }
}
export default ToolTipsExample;
