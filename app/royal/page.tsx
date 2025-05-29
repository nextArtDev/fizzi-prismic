import React from 'react'
import Hero from './components/hero'
import ScrollText from './components/scroll-text'
import FragranceList from './components/fragrance/fragrance-list'

 

const page = ( ) => {
  return (
    <div className='pt-14 md:pt-16 mini-h-screen w-full '>
      <Hero/>
    <ScrollText/>
    <FragranceList/>
  {/* <div className="h-screen bg-green-300"></div>
  <div className="h-screen bg-yellow-300"></div> */}
    </div>
  )
}

export default page