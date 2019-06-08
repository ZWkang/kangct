```js
<Alert title={"警告title测试"} type={"info"} canClose onClose = {() => { console.log('123')}}>asdsad</Alert>

{['info', 'success', 'danger', 'warning', 'info'].map(item => {
    return <Alert title={item + '测试type使用'} type={item}>message here</Alert>
})}

<Alert title={"警告title测试"} type={"info"} canClose autoclose closetime={3000} onClose = {() => { console.log('123')}}>asdsad</Alert>

```