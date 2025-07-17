# How to create animated scrabble svg

First: create svg and relate classes to it: _skater-scribble-path animate-squiggle_ , make its stroke _currentColor_ to customize it by _text-color_ from parent.

```ts
import { SVGProps } from "react";

export function SkaterScribble(props: SVGProps<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 231 312"
      {...props}
    >
      <path
        className="skater-scribble-path animate-squiggle"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="9"
        d="m12 150-2-32 2-27c2-16 14-36 18-52 4-38 47-25 77-23 19 1 38-6 56-4 9 1 17 7 25 13 6 6 14 11 16 20 3 11-4 26-3 38 2 12 7 21 7 33 2 28 2 55 2 83l-2 28c0 15 1 25-10 37-17 16-34 29-59 32-23 4-47 7-70 3-13-2-19-9-26-20-8-14-17-30-21-46-2-10-1-19 0-29l2-62c0-21 3-40 13-59 7-14 9-29 21-39 6-6 20-2 27-5 10-4 20 0 30 0 9-1 32-8 39-5 14 6 16 15 24 28 5 9-2 23 0 32 3 16 8 30 9 47 1 18-2 36-4 54-1 8 0 15-2 23l-8 12-10 14c-4 5-9 9-14 12l-18 9c-7 4-16 5-24 6-6 2-12 1-18 1-4-1-5-4-8-6l-9-10-12-17a65 65 0 0 1-11-32v-20l5-18c1-10-2-23 0-32 3-13 4-25 8-38 4-9 11-19 19-26 7-7 22-10 32-11 6 0 14 1 18 4 5 4 15 10 18 15 4 6 0 15 2 22l6 42-3 21c-1 10-4 18-8 27-5 12-11 27-24 31-8 3-19 5-28 2-10-5-13-20-14-30-1-7 0-14 1-21 4-17 0-44 8-61 5-8 23-9 28-8 6 0 12 6 14 12 3 6-3 16-3 23l-1 17c-1 9-2 19-6 27-2 5-6 10-10 14-6 7-8 4-10-5s1-19 3-28c1-9 4-18 7-26"
      ></path>
    </svg>
  );
}

```

Second: Create css classes
   _stroke-dasharray_: This property creates dashed lines by defining the lengths of dashes and gaps in the stroke of the path. In this case, the path is treated as a single dash of length 2300. This is useful for creating an animated effect where the stroke appears to be drawn over time.
   _stroke-dashoffset: -2300_: This property offsets the start of the dash pattern. By setting it to -2300, it effectively hides the stroke by moving the dash off-screen (to the left, in this case). When combined with stroke-dasharray, it creates the illusion that the line is not visible initially.
    _transition: stroke-dashoffset 1s ease-in-out 0.2s_: This defines a transition effect for the stroke-dashoffset property. When it changes, it will take 1 second to complete, using an ease-in-out timing function (which starts and ends slowly), and will have a delay of 0.2 seconds before starting._transform-origin: center center;_
   This sets the point around which any transformations (like scaling or rotation) will occur. In this case, it is centered both horizontally and vertically
    _stroke-dashoffset: 0;_: This rule applies when the parent element with the class .skater is hovered over. Changing the stroke-dashoffset to 0 makes the entire dash visible, effectively animating the drawing of the path over a duration of 1 second. The transition defined earlier makes this change smooth, starting after a 0.2 seconds delay.

```CSS
.skater-scribble-path {
  opacity: 0.8;
  stroke-dasharray: 2300;
  stroke-dashoffset: -2300;
  transition: stroke-dashoffset 1s ease-in-out 0.2s;
  transform-origin: center center;
}

.skater:hover .skater-scribble-path {
  stroke-dashoffset: 0;
}
```

Third: assign skater class to parent element and animate it, and assign specific color to each line

```ts
export function Skater({ skater, index }: Props) {
  const colors = [
    "text-brand-blue",
    "text-brand-lime",
    "text-brand-orange",
    "text-brand-pink",
    "text-brand-purple",
  ];

  const scribbleColor = colors[index];
    <div className="skater group relative flex flex-col items-center gap-4">
      <div className="stack-layout overflow-hidden relative w-full h-full max-w-[500px]">
        
        <SkaterScribble className={clsx("relative", scribbleColor)} />
       //..
        <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent"></div>
       //..
      </div>
      
    </div>

```
