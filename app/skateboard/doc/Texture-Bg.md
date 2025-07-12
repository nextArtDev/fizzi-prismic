# Adding Texture To the background

For that we have to add it to _background-image_ instead of background, to add color to it:
First we add texture, then add it to background-image

```CSS
 
.bg-texture {
  background-image: url("/skateboard/bg-texture.webp");
  background-size: 720px 460px;
  background-repeat: repeat;
  background-position: center;
}

```

```ts

  <Bounded
     
      className="bg-texture bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 "
    >
    //...
```