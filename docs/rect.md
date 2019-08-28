```js
<Rect target={document.querySelector('body')}>
  {({ left, right, top, height }) => {
    return (
      <h1>
        document.body: left: {left}, right: {right}, top: {top}, height: {height}
      </h1>
    );
  }}
</Rect>
```
