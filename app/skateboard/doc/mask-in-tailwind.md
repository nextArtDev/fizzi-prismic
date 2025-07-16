# How To create a mask in tailwind

- First: Create a mask class with image
- Second: Use it multiple times to create a layers around and translate it's x and y
- Third: Use it around your component, here: Video

```ts

const MASK_CLASSES =
  "[mask-image:url(/skateboard/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

<div
  className={clsx(
    MASK_CLASSES,
    "bg-brand-lime absolute inset-0 ~translate-x-2/3 ~translate-y-2/3"
  )}
/>
<div
  className={clsx(
    MASK_CLASSES,
    "bg-white absolute inset-0 ~translate-x-1/3 ~translate-y-1/2"
  )}
/>
<div
  className={clsx(
    MASK_CLASSES,
    "bg-white absolute inset-0 ~translate-x-1/2 ~-translate-y-1/3"
  )}
/>
{/* Video */}
<div className={clsx(MASK_CLASSES, "relative h-full")}>
  {youtube_video_id ? (
    <LazyYouTubePlayer youTubeID={youtube_video_id} />
  ) : null}
  {/* Texture overlay */}
  <Image
    src="/image-texture.png"
    alt=""
    fill
    className="pointer-events-none object-cover opacity-50"
  />
</div>
```
