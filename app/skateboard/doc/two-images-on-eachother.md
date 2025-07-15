# Placing two images on each other

for example in stack cards, we want a background and skater on each other, 

- first create a grid layout

- then force them to be _col-start-1_ and _row start one_

```ts
    <div className={clsx("grid grid-cols-1 place-items-center", className)}>
      <div
        ref={backgroundRef}
        className="w-full h-full relative col-start-1 row-start-1 transition-transform"
      > 
        <Image src={backgroundImage} fill alt="" className="w-11/12" />
      </div>

      <div
        ref={foregroundRef}
        className="col-start-1 row-start-1 transition-transform h-full w-full place-items-center"
      >
         
        <Image
          src={foregroundImage}
          alt=""
          height={600}
          width={450}
          // imgixParams={{ height: 600 }}
          className="h-full max-h-[500px] w-auto"
        />
      </div>
    </div>
```