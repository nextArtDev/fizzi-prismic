import { FC } from "react";
import { Bounded } from "../Bounded";
import { RevealText } from "../reveal-text";
import FragranceDisplay from "./fragrance-display";
import { fragrances } from "../../constants";
// import { Content, isFilled } from "@prismicio/client";
// import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

// import { Bounded } from "@/royal/components/Bounded";
// import { RevealText } from "@/royal/components/RevealText";
// import { FragranceDisplay } from "./FragranceDisplay";

/**
 * Props for `FragranceList`.
 */
// export type FragranceListProps =
//   SliceComponentProps<Content.FragranceListSlice>;

/**
 * Component for "FragranceList" Slices.
 */
// const FragranceList: FC<FragranceListProps> = ({ slice }) => {
const FragranceList = ( ) => {
  return (
    <Bounded
    //   data-slice-type={slice.slice_type}
    //   data-slice-variation={slice.variation}
      className="space-y-8 bg-black py-16 text-center text-white md:py-24"
    >
      <div className="mx-auto space-y-8">
        <p className="text-sm font-light tracking-[0.2em] uppercase">
          {"Powerful Simplicity."}
        </p>
        <RevealText
        //   field={slice.primary.heading}
        //   as="h2"
        text={'Powerful Simplicity.'}
        //   id={`fragrance-list-heading-${slice.id}`}
          id={`fragrance-list-heading-1`}
          align="center"
          duration={1.5}
          staggerAmount={0.3}
          className="font-display text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        />

        <div className="mx-auto max-w-2xl text-lg text-balance text-gray-300">
          {/* <PrismicRichText field={slice.primary.body} /> */}
          <p>{"'An expression of quiet luxury, Côte Royale is designed for the man who commands attention without seeking it. A reflection of nature’s raw beauty, redefined for today.'"} </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12">
          { fragrances.map((item) => {
           
              return (
                <FragranceDisplay
                  key={item.id}
               
                   {...item}
                />
              );
         
          })}
        </div>
      </div>
    </Bounded>
  );
};

export default FragranceList;
