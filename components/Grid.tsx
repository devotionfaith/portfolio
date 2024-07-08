import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import {gridItems} from '../data/index.js'

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            classNameData={
              (() => {
                if (i === 0) {
                  return "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]";
                } else if(i === 1){
                  return "lg:col-span-2 md:col-span-3 md:row-span-4";
                } else if(i === 2){
                  return "lg:col-span-2 md:col-span-3 md:row-span-2";
                } else if(i === 3){
                  return "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]";
                } else if(i === 4){
                  return "lg:col-span-2 md:col-span-3 md:row-span-2";
                } else {
                  return "";
                }
              })()
            }
            
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid
