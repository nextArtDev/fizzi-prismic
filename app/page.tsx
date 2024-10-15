import Scene from '@/components/explotsion/Scene'
import Hero from '@/components/Hero'
import SkyDive from '@/components/SkyDive'
 
 

export default async function Home() {
  
  return (
    <div className=" min-h-screen ">
      <Hero/>
      <SkyDive/>
      {/* <Scene /> */}
      {/* <SvgAnimation/> */}
 
    </div>
  )
}
