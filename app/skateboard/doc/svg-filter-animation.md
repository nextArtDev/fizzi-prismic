# How to add SVG filters to animate element

first add svg filters as a component:
_baseFrequency_ would change the resonance frequency, bigger, lower movement
_scale="4"_ Scale it
__seed={index}__ is very important because it would change the filters index

```ts
export function SVGFilters() {
  return (
    <svg className="h-0 w-0">
      <defs>
        {Array.from({ length: 5 }).map((_, index) => (
          <filter id={`squiggle-${index}`} key={index}>
            <feTurbulence
              baseFrequency="0.05"
              id="turbulence"
              numOctaves="2"
              result="noise"
              seed={index}
            ></feTurbulence>
            <feDisplacementMap
              id="displacement"
              in2="noise"
              in="SourceGraphic"
              scale="4"
            ></feDisplacementMap>
          </filter>
        ))}
      </defs>
    </svg>
  );
}
```

second: add it to the root layout

```ts
export default function SkateBoardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <section
        className={ ``}
        >
          <Header/>
         {children}
                <SVGFilters />
      </section>
  )
}
```

third: add animation of it to tailwind.config
It changes all 5 filters in 0.5s 

```ts
keyframes: {
        squiggle: {
          "0%": { filter: 'url("#squiggle-0")' },
          "25%": { filter: 'url("#squiggle-1")' },
          "50%": { filter: 'url("#squiggle-2")' },
          "75%": { filter: 'url("#squiggle-3")' },
          "100%": { filter: 'url("#squiggle-4")' },
        },
      },
      animation: {
          squiggle: "squiggle .5s infinite",
      },
```

forth: add it to svg

```ts
export function WideLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  const isSafari = useIsSafari(true);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1440 553"
      //Adding animation of filters to svg
      className={clsx(className, isSafari ? undefined : "animate-squiggle")}
      {...props}
    >
      <path
        fill="currentColor"
        d="M211 222c-5 13 0 27-6 40-6 11-19 18-29 26-7 6-11 13-21 16-17 5-38-3-55-4-14 4-30-2-39-13-3-12-10-21-17-31-6-16-14-36-18-52 1-12 5-32 18-36 4 1 9 3 13 0 75-5 32 75 67 91 11 6 20 1 28-8 14-4 21-14 ...3"
      ></path>
    </svg>
  );
}

```


```ts```