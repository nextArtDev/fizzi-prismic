# How to change right-left order in stacking cards

First we should place a variant inside elements to change position here _imageOnLeft_

```ts
export const textAndImage=[
    {id:'1',theme:'Blue',variation:'imageOnLeft',heading:'Crafted for the Kickflip',  },
    {id:'2',theme:'Orange',variation:'',heading:'Not Just a Deck, It’s Your Canvas' },
    {id:'3',theme:'Navy',variation:'imageOnLeft',heading:'Built for Hard Landings  },
    {id:'4',theme:'Lime',variation:'',heading:'Fueling the Next Generation'  },
] as const

```

Second create a grid (or flex) in parent container and then change __order_2__ by position

```ts
<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div
          className={clsx(
            "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            // changing order of elements in grid layouts by using order_2
            slice.variation === "imageOnLeft" && "md:order-2"
          )}
        >
         //...
        </div>

        <ParallaxImage
          foregroundImage={slice.foreground_image}
          backgroundImage={slice.background_image}
        />
      </div>
```