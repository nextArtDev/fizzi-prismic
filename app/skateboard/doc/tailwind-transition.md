# Tailwind transition

We should create a _transform_ and _transition-all_ and then we can customize _duration-100_ _ease-in-out_ and _group-hover:_

```ts

 <Image
   src={skater.bgImage}
   fill 
   className="scale-110 transform transition-all duration-100 ease-in-out group-hover:scale-100 group-hover:brightness-7 group-hover:saturate-[.8]"

/>
 <Image 
   src={skater.imageUrl} 
   fill 
   className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
 />

```
