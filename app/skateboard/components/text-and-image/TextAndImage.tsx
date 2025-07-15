// import { Content } from "@prismicio/client";
// import {
//   PrismicRichText,
//   PrismicText,
//   SliceComponentProps,
// } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";
import { SlideIn } from "../shared/SlideIn";
import { Heading } from "../shared/Heading";
import { ButtonLink } from "../shared/ButtonLink";
import { ParallaxImage } from "./ParallaxImage";
 
// import { ButtonLink } from "@/components/ButtonLink";
// import { Heading } from "@/components/Heading";
// import { SlideIn } from "@/components/SlideIn";
// import { ParallaxImage } from "./ParallaxImage";

declare module "react" {
  interface CSSProperties {
    "--index"?: number;
  }
}
 
const TextAndImage = ({   index,item:slice }: {index:number,item:{
    id:string,
    theme:string, variation:string,heading:string,body:string, buttonText:string,buttonLink:string,foreground_image:string,background_image:string
}})  => {
//   const theme = slice.primary.theme;
  const theme = slice.theme;
  return (
    <Bounded
       
      className={clsx(
        "sticky top-[calc(var(--index)*2rem)]",
        theme === "Blue" && "bg-texture bg-brand-blue text-white",
        theme === "Orange" && "bg-texture bg-brand-orange text-white",
        theme === "Navy" && "bg-texture bg-brand-navy text-white",
        theme === "Lime" && "bg-texture bg-brand-lime"
      )}
      style={{ "--index": index }}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div
          className={clsx(
            "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            slice.variation === "imageOnLeft" && "md:order-2"
          )}
        >
          <SlideIn>
            <Heading size="lg" as="h2">
              {/* <PrismicText field={slice.primary.heading} /> */}
              <h2 className="text-3xl font-bold">{slice.heading}</h2>
            </Heading>
          </SlideIn>
          <SlideIn>
            <div className="max-w-md text-lg leading-relaxed">
              {/* <PrismicRichText field={slice.primary.body} /> */}
             <p>{slice.body}</p>
            </div>
          </SlideIn>
          <SlideIn>
            <ButtonLink
            //   href={slice.primary.button}
              href={slice.buttonLink}
              color={theme === "Lime" ? "orange" : "lime"}
            >
              {/* {slice.button.text} */}
              {slice.buttonText}
            </ButtonLink>
          </SlideIn>
        </div>

        <ParallaxImage
          foregroundImage={slice.foreground_image}
          backgroundImage={slice.background_image}
        />
      </div>
    </Bounded>
  );
};

export default TextAndImage;
