```js
<ErrorBoundaries>
  <div>test</div>
</ErrorBoundaries>
```

```js
function Test() {
  throw new Error('123');
}
<ErrorBoundaries>
  <div>
    <Test />
  </div>
</ErrorBoundaries>;
```
