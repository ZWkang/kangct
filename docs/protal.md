```jsx
initialState = { value: '' };
let wrap;
<div ref={(ref) => (wrap = ref)} className={'wrapper-protal'}>
  <Portal target={'.wrapper-protal'}>
    <h2> i am protal element</h2>
    <h2> you can check me in the body element</h2>
  </Portal>
</div>;
```
