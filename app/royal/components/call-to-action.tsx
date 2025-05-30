 
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "./fade-in";
import { RevealText } from "./reveal-text";
 
import Link from "next/link";

 
const CallToAction  = ( ) => {
  return (
    <Bounded
        // custom background bg-[url('/royal/background.avif')] bg-cover bg-center
      className="relative overflow-hidden bg-[url('/royal/background.avif')] bg-cover bg-center py-16 text-gray-50 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
        <FadeIn
          className="translate-y-2 text-sm font-light tracking-[.2em] uppercase"
          vars={{ duration: 0.8 }}
        >
         <p>Fragrance Quiz</p>
        </FadeIn>

        <RevealText
          id="cta-heading"
       text="The Cote Royale Fragrance Finder"
    
          className="font-display mx-auto max-w-3xl text-5xl sm:text-6xl md:text-7xl"
          align="center"
          staggerAmount={0.1}
          duration={0.8}
        />

        <FadeIn
          className="mx-auto max-w-2xl translate-y-2 text-lg text-balance text-gray-300"
          vars={{ duration: 0.8, delay: 0.4 }}
        >
          {/* <PrismicRichText field={slice.primary.body} /> */}
          <p>{'Find your perfect scent with our personalized quiz.'}</p>
        </FadeIn>

        <div className="mt-10">
          {/* {slice.primary.button.map((link) => (
            <FadeIn key={link.key}>
              <ButtonLink field={link} variant={link.variant} />
            </FadeIn>
          ))} */}
       
            <FadeIn  >
            <Link  href={''} className=" w-fit inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300  border border-white text-white hover:bg-white/20"
         >
                TAKE THE QUIZ
              </Link>
            </FadeIn>
        
        </div>
      </div>
    </Bounded>
  );
};

export default CallToAction;
