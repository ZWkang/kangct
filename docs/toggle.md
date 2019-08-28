```js
<Toggle
  className="toggle"
  initial
  component={({ on, toggle }) => {
    return <input checked={on} onChange={toggle} type="checkbox" />;
  }}
/>
```
