import { Bounded } from "@/components/Bounded";
 
import React from "react";
import { SlideIn } from "../shared/SlideIn";
import { Heading } from "../shared/Heading";
import { Skater } from "./Skater";
import { skaters } from "../../constants";
 
const TeamGrid =   ( ) => {
 

  return (
    <Bounded
 
      className="bg-texture bg-brand-navy"
    >
      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center text-white">
          {/* <PrismicText field={slice.primary.heading} /> */}
          <h1 className="font-bold text-3xl md:text-5xl">The Team</h1>
        </Heading>
      </SlideIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {skaters.map((skater, index) => (
          <React.Fragment key={index}>
            {skater.first_name && (
              <SlideIn>
                <Skater index={index} skater={skater} />
              </SlideIn>
            )}
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamGrid;
