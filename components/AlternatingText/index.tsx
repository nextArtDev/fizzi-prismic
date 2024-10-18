"use client";

import { Bounded } from "@/components/Bounded";
 
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";

 const slice = [
    {id:1, heading:'Gut-Friendly Goodness', body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos totam nisi iusto voluptates illo tenetur natus cum perspiciatis est mollitia quae beatae, vero laboriosam impedit sunt consequuntur, odit aliquid ab?"},
    {id:2, heading:'Light Calories, Big Flavor', body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos totam nisi iusto voluptates illo tenetur natus cum perspiciatis est mollitia quae beatae, vero laboriosam impedit sunt consequuntur, odit aliquid ab?'},
    {id:3, heading:'Naturally Refreshing', body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos totam nisi iusto voluptates illo tenetur natus cum perspiciatis est mollitia quae beatae, vero laboriosam impedit sunt consequuntur, odit aliquid ab?'}
 ] 
const AlternatingText = ( ) => {
  return (
    <Bounded
    //   data-slice-type={slice.slice_type}
    //   data-slice-variation={slice.variation}
      className="alternating-text-container relative bg-yellow-300 text-sky-950"
    >
      <div>
        
        <div className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          {slice.map((item, index) => (
            <div
              key={item.id}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",

                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
                )}
              >
                <h2 className="text-balance text-6xl font-bold">
                  {item.heading} 
                </h2>
                <div className="mt-4 text-xl">
                  {item.body} 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
