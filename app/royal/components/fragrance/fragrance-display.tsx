// import { ButtonLink } from "@/components/ButtonLink";
// import { FadeIn } from "@/components/FadeIn";
// import { FragranceAttributes } from "@/components/FragranceAttributes";
// import { createClient } from "@/prismicio";
// import { Content } from "@prismicio/client";
// import { PrismicNextImage } from "@prismicio/next";
// import { PrismicRichText, PrismicText } from "@prismicio/react";
import { HiPlus } from "react-icons/hi2";
import { FadeIn } from "../fade-in";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FragranceAttributes, MoodKey, ScentProfileKey } from "./fragrance-attributes";

type FragranceDisplayProps = {
 
    id:string
    title:string
    description:string
    subtitle:string
mode:string
scent:string
price:string
image:StaticImageData
featuredImage:StaticImageData
    
 
};

 const FragranceDisplay = async ({ 
 id,
title,
description,
subtitle,
mode,
scent,
price,
image,
 
 }: FragranceDisplayProps) => {
  console.log({title,
    description,
    subtitle,
    mode,
    scent,
    price,
    image,})
 

  return (
    <FadeIn
      className="relative z-10 grid min-h-[85vh] w-full translate-y-20 items-center justify-items-start border border-white/10 p-4 text-left md:p-14 lg:p-20"
      vars={{ duration: 2.5 }}
      start="top 50%"
    >
      <div className="absolute inset-0 z-0">
        <Image
          // field={fragrance.data.feature_image}
          src={image}
          className="object-cover opacity-40 md:opacity-100"
          fill
          // width={1150}
          // quality={90}
          alt=""
        />
      </div>

      <FadeIn
        className="relative z-10 grid translate-y-8"
        vars={{ duration: 3, delay: 0.8 }}
        start="top 50%"
      >
        <h3 className="font-display mb-3 text-5xl md:text-6xl lg:text-7xl">
         

          {title}
        </h3>

        <p className="mb-8 text-base font-semibold text-gray-300">
          {subtitle}
        </p>

        <div className="mb-10 max-w-md text-lg text-gray-300">
          <p>
            {description}
          </p>
     
        </div>

        <FragranceAttributes
          scentProfile={scent as ScentProfileKey}
          mood={ mode as MoodKey}
          className="mb-10"
        />

        <div className="flex flex-wrap gap-4 items-center justify-center">
          {/* <ButtonLink document={fragrance} variant="Secondary">
            Discover
          </ButtonLink> */}
          <Link  href={`/royal/fragrance/${id}`} className="">
            Discover
          </Link>
          <Link  href={''} className=" w-fit inline-flex items-center justify-center px-8 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300  border border-white text-white hover:bg-white/20"
         >
          
            <HiPlus className="mr-2" /> <span>Add to bag</span>
          </Link>
        </div>
      </FadeIn>
    </FadeIn>
  );
};
export default FragranceDisplay