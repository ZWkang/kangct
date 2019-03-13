<!-- import React from 'react'
import PropTypes from 'prop-types'

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class Button extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    foo: PropTypes.number,
    /** Description of prop "baz". */
    baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }
  static defaultProps = {
    foo: 42
  }

  render() {
    /* ... */
  }
} -->

<!--
  可以使用代码注释。
  也可以标记prop
  会自动提取props type的值作为表格渲染
-->



<!-- 
React component example:

```js
<Button size="large">Push Me</Button>
```

You can add a custom props to an example wrapper:

```js { "props": { "className": "checks" } }
<Button>I’m transparent!</Button>
```

Or disable an editor by passing a `noeditor` modifier:

```jsx noeditor
<Button>Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier:

```jsx static
import React from 'react';
```

Examples with all other languages are rendered only as highlighted source code, not an actual component:

```html
<Button size="large">Push Me</Button>
```

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.


md文件的示例 -->


/**
 * Component is described here.
 *
 * @example ./extra.examples.md
 */
export default class Button extends React.Component {
  // ...
}

这样子将组件与实例文件相关联

默认情况下，组件具有的任何方法都被视为私有且未发布。
使用JSDoc @public标记标记您的公共方法，以便在文档中发布它们：

/**
 * Insert text at cursor position.
 *
 * @param {string} text
 * @public
 */
insertAtCursor(text) {
  // ...
}


默认情况下，您的组件拥有的所有道具都被视为公开并已发布。
在极少数情况下，您可能希望从文档中删除prop，同时将其保留在代码中。
为此，使用JSDoc @ignore标记标记prop以将其从文档中删除：
MyComponent.propTypes = {
  /**
   * A prop that should not be visible in the documentation.
   *
   * @ignore
   */
  hiddenProp: React.PropTypes.string
}


/**
 * The only true button.
 *
 * @visibleName The Best Button Ever 🐙
 */
class Button extends React.Component {

给组件标记