```js
<ImageComponent is32x32 imageUrl={'https://zwkang.github.io/Boreads/example/1x1picture.jpeg'} />

<br />

<ImageComponent is64x64 imageUrl={'https://zwkang.github.io/Boreads/example/1x1picture.jpeg'} />

<br />

<ImageComponent is128x128 imageUrl={'https://zwkang.github.io/Boreads/example/1x1picture.jpeg'} />

<br />

<ImageComponent is256x256 imageUrl={'https://zwkang.github.io/Boreads/example/1x1picture.jpeg'} />

```

```jsx
<Heading.H4>半圆容器</Heading.H4>
<ImageComponent radius is256x256 imageUrl={'https://zwkang.github.io/Boreads/example/1x1picture.jpeg'} />


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
    is3by1 block
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
      is3by2 block
      </Heading.H1>
    </Box>
</ImageComponent>

```
