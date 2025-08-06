# Swing svg

```ts
'use client'
import { SVGProps, useRef, useId } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface HorizontalLineProps{
props?: SVGProps<SVGSVGElement>
 duration?:number ,
  repeatDelay?:number ,
  className?:string
}
 
export function HorizontalLine({props,
duration= 2,
repeatDelay= 1}:HorizontalLineProps) {
  const container = useRef<SVGSVGElement>(null);
  const clipId = useId(); // Generates a unique ID

  useGSAP(() => {
    gsap.fromTo(
      ".clip-rect",
      { attr: { width: 0 } },
      {
        attr: { width: 266 },
        duration: duration,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: repeatDelay,
        
      }
    );
  }, { scope: container });

  return (
    <svg
      ref={container}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 266 8"
      // Set width and height to 100% to fill the parent container
      // width="100%" 
      // height="100%"
      // preserveAspectRatio has been removed to fix the scaling issue
      shapeRendering="crispEdges"
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <rect className="clip-rect" x="0" y="0" width="0" height="8" />
        </clipPath>
      </defs>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="8 4"
        clipPath={`url(#${clipId})`} // Use the unique ID
        d="M 20 4 H 250"
      />
    </svg>
  );
}


interface VerticalLineProps{
props?: SVGProps<SVGSVGElement>
 duration?:number,
  repeatDelay?:number,
   className?:string
}
 
export function VerticalLine({props,
duration= 2,
repeatDelay= 1}:VerticalLineProps) {
  const container = useRef<SVGSVGElement>(null);
  const clipId = useId(); // Generates a unique ID

  useGSAP(() => {
    gsap.fromTo(
      ".clip-rect",
      { attr: { height: 0 } },
      {
        attr: { height: 555 },
        duration: duration,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: repeatDelay,
      }
    );
  }, { scope: container });

  return (
    <svg
      ref={container}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 555"
      width="100%"
      height="100%"
      shapeRendering="crispEdges"
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <rect className="clip-rect" x="0" y="0" width="8" height="0" />
        </clipPath>
      </defs>
      <path
        fill="none"
        stroke="currentColor"
         strokeWidth="2.5"
        strokeDasharray="8 4"
        clipPath={`url(#${clipId})`} // Use the unique ID
  d="M 4 20 V 510"
      />
    </svg>
  );
}

```