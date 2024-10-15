# GSAP

Anytime we use gsap or scroll plugin we element should know about it.

```typescript
gsap.registerPlugin(useGSAP, ScrollTrigger);
```

To avoid flickers we should use __.set__ even if we use _.from_

```typescript
introTl
.set(".hero", { opacity: 1 })
.from(".hero-header-word", {
  scale: 3,
  opacity: 0,
  ease: "power4.in",
  delay: 0.3,
  stagger: 1,
})
```

Stagger Each element that we are animating by 1 second, there are two elements that match this class:_.hero-header-word_ so we have stagger 1 between them.

```typescript

      introTl
    .set(".hero", { opacity: 1 })
    .from(".hero-header-word", {
      scale: 3,
      opacity: 0,
      ease: "power4.in",
      delay: 0.3,

      // stagger by one second
      stagger: 1,
    })
```

Delaying by using position value in timeline:
whatever time we're going start at, instead we use __+=__ it means +=0.8 time after the older one.  

```typescript
.from(
  ".hero-subheading",
  {
    opacity: 0,
    y: 30,
  },
  "+=.8",
)
```

ScrollTrigger:  

```typescript
import { ScrollTrigger } from "gsap/ScrollTrigger";

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: '.container',
        pin: true, // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: '+=500', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
            snapTo: 'labels', // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        }
    }
});

// add animations and labels to the timeline
tl.addLabel('start')
    .from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
    .addLabel('color')
    .from('.box', { backgroundColor: '#28a92b' })
    .addLabel('spin')
    .to('.box', { rotation: 360 })
    .addLabel('end');
```

Standalone/Custom example Of scrollTrigger 

You don't need to put ScrollTriggers directly into animations (though that's probably the most common use case). Use the callbacks for anything... 

```typescript
ScrollTrigger.create({
    trigger: '#id',
    start: 'top top',
    endTrigger: '#otherID',
    end: 'bottom 50%+=100px',
    onToggle: (self) => console.log('toggled, isActive:', self.isActive),
    onUpdate: (self) => {
        console.log(
            'progress:',
            self.progress.toFixed(3),
            'direction:',
            self.direction,
            'velocity',
            self.getVelocity()
        );
    }
});
```

## How to use gsap for list of children 

```typescript

    gsap.set(
      wordsRef.current.children.map((word) => word.position),
      { ...getXYPositions(7), z: 2 },
    );

```

```typescript```
```typescript```
```typescript```
```typescript```
```typescript```
```typescript```
```typescript```