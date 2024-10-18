# wrap function

Returns the next number in a range after the given index, jumping to the start after the end has been reached.

```typescript
let color = gsap.utils.wrap(['red','green', 'yellow'],5) // yellow 

let wrapper = gsap.utils.wrap(['red','green','yellow'])

let color = wrapper(5) //"yellow"
```