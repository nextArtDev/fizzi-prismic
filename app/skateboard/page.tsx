import React from 'react'
import Hero from './components/hero/Hero'
import ProductGrid from './components/product-grid/ProductGrid'
import { textAndImage } from './constants'
import TextAndImage from './components/text-and-image/TextAndImage'
import VideoBlock from './components/video-block/VideoBlock'

const page = () => {
  return (
    <div>
        <Hero/>
        <ProductGrid/>
        <section className="relative">

        {textAndImage.map((item,i)=>(
          <TextAndImage index={i} key={i} item={item} />
          
        ))}
        </section>
        <section className=" w-full h-full">

        <VideoBlock/>
        </section>
    </div>
  )
}

export default page 