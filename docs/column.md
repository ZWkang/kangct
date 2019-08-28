<h5>default 12 columns</h5>

```jsx
<Column style={{ textAlign: 'center', marginTop: '10px' }} is-12>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} xm-is-1 is-1 border>
    1
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 border>
    1
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-2 border>
    2
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-4 border>
    4
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-4 border>
    4
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-12>
    <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 md-is-2 border>
      1
    </Column>
    <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 md-is-2 border>
      1
    </Column>
    <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 md-is-2 border>
      1
    </Column>
    <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 md-is-2 border>
      1
    </Column>
    <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 md-is-2 border>
      1
    </Column>
    <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 md-is-2 border>
      1
    </Column>
    <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 md-is-2 border>
      1
    </Column>
    <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 md-is-2 border>
      1
    </Column>
    <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 md-is-2 border>
      1
    </Column>
    <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 md-is-2 border>
      1
    </Column>
    <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 md-is-2 border>
      1
    </Column>
    <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1 md-is-2 border>
      1
    </Column>
  </Column>
</Column>
```

<h5>响应式</h5>

```js
<Column style={{ textAlign: 'center', marginTop: '10px' }} is-12 border>
  <Column
    style={{ textAlign: 'center' }}
    md-is-6
    sm-is-4
    xl-is-12
    is-2
    lg-is-9
    gutter="1rem"
    border
  >
    1
  </Column>
</Column>
```

```js
<Column style={{ textAlign: 'center', marginTop: '10px' }} is-12-12>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-3-4 border>
    3/4
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1-12 border>
    1/12
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1-12 border>
    1/12
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1-24 border>
    1/24
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1-24 border>
    1/24
  </Column>
</Column>
```

<h5>offset</h5>

```js
<Column style={{ textAlign: 'center', marginTop: '10px' }} is-12-12>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-6 left-offset-1 border>
    6
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-4 left-offset-1 border>
    4
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-11 right-offset-1 border>
    11
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-5 left-offset-7 border>
    11
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-3-4 left-offset-1 border>
    11
  </Column>
</Column>
```

```js
<Column style={{ textAlign: 'center', marginTop: '10px' }} is-12-12>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-3-4 left-offset-1-4 border>
    3/4
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1-2 left-offset-1-4 border>
    1-2
  </Column>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} is-1-4 border>
    1-2
  </Column>
</Column>
```

```js
<Column style={{ textAlign: 'center', marginTop: '10px' }} is-12-12>
  <Column style={{ textAlign: 'center', marginTop: '10px' }} sm-is-3 md-is-6 lg-is-12 border>
    12/6/3
  </Column>
</Column>
```
