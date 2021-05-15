import React, { Component, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import hoistNonReactStatic from 'hoist-non-react-statics';

// like react click outside
// 利用事件是否为当前内容区域来断定是否应该执行
function clickOutSide(ChildrenComponent) {
  class RenderComponent extends Component {
    constructor(props) {
      super(props);
      this.childRef = null;
    }

    componentDidMount() {
      document.addEventListener('click', this.handleClickOutSide, true);
    }
    componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutSide, true);
    }

    handleClickOutSide = (e) => {
      const childRef = this.childRef;
      if (
        (!childRef || !childRef.contains(e.target)) &&
        this.childInstance &&
        typeof this.childInstance.handleClickOutside === 'function'
      ) {
        this.childInstance.handleClickOutside(e);
      }
    };

    render() {
      const { innerRef, ...rest } = this.props;

      return (
        <ChildrenComponent
          {...rest}
          ref={(c) => {
            this.childInstance = c;
            this.childRef = ReactDOM.findDOMNode(c);
            console.innerRef && innerRef(c);
          }}
        />
      );
    }
  }

  RenderComponent.displayName = `clickOutSide(${
    ChildrenComponent.displayName || ChildrenComponent.name
  })`;

  const EnhanceHoistStaticComponent = hoistNonReactStatic(RenderComponent, ChildrenComponent);

  return forwardRef((props, ref) => <EnhanceHoistStaticComponent innerRef={ref} {...props} />);
}

export default clickOutSide;
