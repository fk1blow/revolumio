# ratios

https://h7n89.csb.app/

```js
  // const isPortrait = useMediaQueryFoo({ orientation: 'portrait' })
  // const isFoox = useMediaQueryFoo({ aspectRatio: "min-aspect-ratio: ~'4/3'" })
  const exactly11 = useMediaQueryFoo({ aspectRatio: '1/1' })
  const exactly34 = useMediaQueryFoo({ aspectRatio: '3/4' })
  const lessThan34 = useMediaQueryFoo({ maxAspectRatio: '3/4' })
  const between34and11 = useMediaQueryFoo({
    minAspectRatio: '3/4',
    maxAspectRatio: '1/1',
  })
  const between11and43 = useMediaQueryFoo({
    minAspectRatio: '1/1',
    maxAspectRatio: '4/3',
  })
  const exactly43 = useMediaQueryFoo({ aspectRatio: '4/3' })
  const greaterThan43 = useMediaQueryFoo({ minAspectRatio: '4/3' })
```
