# Changing SVG Color

If we want to change svg from jsx element we should use _fill: currentColor_ property

```ts
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 411 211"
      {...props}
    >
      <title>Suburbia Skate Logo</title>
      <path
      //Control SVG Color From Above
        fill="currentColor"
        d="M55 120c-2 3 0 8-2 11-2 4-6 6-9 8-2 2-3 4-6 5-5 1-11-1-16-1-4 1-9-1-12-4-1-4-3-6-5-9l-5-16c0-3 1-9 5-10h4c22-2 10 22 20 27 3 1 6 0 8-3 4-1 6-4 5-8-1-7-2-14-9-16-4 0-8-3-12-5-4-3-9-3-13-6-2-2 0-6  "
      ></path>
    </svg>
  );
}

//...
// SVG Color Would Be Red
<Logo className='text-red-500' />
```

