 
import React from 'react'
import { Bounded } from './Bounded'
import Image from 'next/image'
import heroImage from '../../../public/royal/hero-image.jpg'
import Link from 'next/link'
 
import { FadeIn } from './fade-in'
import { RevealText } from './reveal-text'
 

const Hero = ( ) => {
  
 
  
  
  return (
    <Bounded
 
        className={`relative w-full h-full  overflow-hidden bg-neutral-950 `}>
          {/* motion-safe: for accessability; just scale eit up when its needed */}
            <FadeIn vars={{ scale: 1, opacity: 0.5 }} className=" absolute inset-0 motion-safe:scale-125 motion-reduce:opacity-50 ">

        <Image src={heroImage} priority alt='hero image' fill className='object-cover'/>
            </FadeIn>
        <div className="relative flex h-screen flex-col justify-center">
  
        <RevealText text="Effortless Elegance"
        id="hero-heading"
        className="font-display max-w-xl text-6xl leading-none text-neutral-50md:text-7xl lg:text-8xl"
        staggerAmount={0.2}
        duration={1.7}   />
        <FadeIn
        // important factor to go up or down: translate-y-8
          className="mt-6 max-w-md translate-y-8  text-lg text-neutral-100"
          vars={{ delay: 1, duration: 1.3 }}
        >

        
        <p  className=" " >An expression of quiet luxury, Côte Royale is designed for the man who commands attention without seeking it. A reflection of nature’s raw beauty.</p>
        </FadeIn>
 
         <FadeIn
          className="mt-8 translate-y-5"
          vars={{ delay: 1.7, duration: 1.1 }}
        >
        <Link  href={''} className=" w-fit inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300  border border-white text-white hover:bg-white/20"
         >Shop now</Link>
         </FadeIn>
      </div>
    </Bounded>
  )
}

export default Hero