```js
<ImageComponent is32x32 imageUrl={'https://bulma.io/images/placeholders/128x128.png'} />

<br />

<ImageComponent is64x64 imageUrl={'https://bulma.io/images/placeholders/128x128.png'} />

<br />

<ImageComponent is128x128 imageUrl={'https://bulma.io/images/placeholders/128x128.png'} />

<br />

<ImageComponent is256x256 imageUrl={'https://bulma.io/images/placeholders/128x128.png'} />

```

```jsx
<Heading.H4>半圆容器</Heading.H4>
<ImageComponent radius is256x256 imageUrl={'https://bulma.io/images/placeholders/128x128.png'} />


```

```jsx
<ImageComponent is3by1 type={'xixi'}>

  <Box
    style={
      {
        boxSizing:'border-box',
        height: '100%'
      }
    }
  >
    <Heading.H1>
    is1by3 block
    </Heading.H1>
  </Box>
</ImageComponent>

<br />
<ImageComponent is3by2 type={'xixi'}>
    <Box
      style={
        {
          boxSizing:'border-box',
          height: '100%'
        }
      } >
      <Heading.H1>
      is1by3 block
      </Heading.H1>
    </Box>
</ImageComponent>

```
