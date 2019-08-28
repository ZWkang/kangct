```jsx
<Alert
  title={'警告title测试'}
  type={'info'}
  canClose
  onClose={() => {
    console.log('123');
  }}
>
  asdsad
</Alert>
```

```jsx
['info', 'success', 'danger', 'warning', 'info'].map((item, index) => {
  return (
    <Alert title={item + '测试type使用'} type={item} key={item + index}>
      message here
    </Alert>
  );
});
```

```jsx
<Alert
  title={'警告title测试'}
  type={'info'}
  canClose
  autoclose
  closetime={3000}
  onClose={() => {
    console.log('success remove alert');
  }}
>
  asdsad
</Alert>
```
