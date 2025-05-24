import React from 'react'
import { Bounded } from './Bounded'
import Image from 'next/image'
import heroImage from '../../../public/royal/hero-image.jpg'
import Link from 'next/link'
 

const Hero = ( ) => {
  return (
    <Bounded
        className={`relative w-full h-full  overflow-hidden bg-neutral-950 `}>
            <figure className="absolute inset-0 scale-125 ">

        <Image src={heroImage} priority alt='hero image' fill className='object-cover opacity-50'/>
            </figure>
        <div className="relative flex h-screen flex-col justify-center">
        {/* <RevealText
          field={slice.primary.heading}
          id="hero-heading"
          className="font-display max-w-xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-8xl"
          staggerAmount={0.2}
          duration={1.7}
          as="h1"
        /> */}
        <h1  className="font-display max-w-xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-8xl">Effortless Elegance</h1>

        {/* <FadeIn
          className="mt-6 max-w-md translate-y-8 text-lg text-neutral-100"
          vars={{ delay: 1, duration: 1.3 }}
        >
          <PrismicRichText field={slice.primary.body} />
        </FadeIn> */}
        <p  className="mt-6 max-w-md translate-y-8 text-lg text-neutral-100" >An expression of quiet luxury, Côte Royale is designed for the man who commands attention without seeking it. A reflection of nature’s raw beauty.</p>

        {/* <FadeIn
          className="mt-8 translate-y-5"
          vars={{ delay: 1.7, duration: 1.1 }}
        >
          {slice.primary.button.map((link) => (
            <ButtonLink
              key={link.key}
              field={link}
              className="w-fit"
              variant="Secondary"
            />
          ))}
        </FadeIn> */}
        <Link  href={''} className="mt-12 w-fit inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300  border border-white text-white hover:bg-white/20"
         >Shop now</Link>
      </div>
    </Bounded>
  )
}

export default Hero