### size

```jsx

// import Intl from '../src/components/i18n/Intl.js'
const Intl = require('../src/components/Intl/index.js')
console.log(Intl)
const data = {
  local: 'zh-cn',
  locals: {
    'zh-cn': {
      small: '小尺寸',
      normal: '普通尺寸',
      medium: '中等尺寸',
      big: '大尺寸'
    },
    'en-us': {
      small: 'small size',
      normal: 'normal size',
      medium: 'medium size',
      big: 'big size'
    }
  }
}

const i18n = new Intl.default(data);

;['small', 'normal', 'medium', 'big'].map((_) => {
  const props = {[_]: true}
  return <Button {...props} >{i18n.d[_]}</Button>
})
```

### shadow

```js
<Button big hover shadow>
  biggest size
</Button>
```

### full

```js
<Button full>full mode</Button>
```

### disabled

```js
<Button disabled>full mode</Button>
```

### hover

```js
<Button hover>full mode</Button>
```

### Group

```js
<Button.Group>
  <Button hover>full mode</Button>
  <Button hover>full mode</Button>
  <Button hover>full mode</Button>
  <Button hover>full mode</Button>
</Button.Group>
```

```js
<Button.Group vertical>
  <Button hover>full mode</Button>
  <Button hover>full mode</Button>
  <Button hover>full mode</Button>
  <Button hover>full mode</Button>
</Button.Group>
```
