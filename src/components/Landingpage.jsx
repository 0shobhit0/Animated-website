import { motion } from 'framer-motion';


import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const Landingpage = () => {
  
 
  return (
    <div data-scroll data-scroll-speed="2" className='w-full min-h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-20 px-5 lg:px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className='masker'>
              <div className='w-fit flex items-center'>
                {index === 1 && (
                  <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76 , 0 , 0.24 , 1], duration:1}} className='w-[9vw] h-[6vw] relative -top-[-0.5vw] '>
                    <img className='w-full h-full object-cover' src="data:image/jpeg;base64,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" alt="" />
                  </motion.div>
                )}
                <h1 className='flex items-center uppercase text-[7vw] h-full leading-[7vw]'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-10 flex flex-col lg:flex-row justify-between items-center py-5 px-5 lg:px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className='text-sm lg:text-md font-light tracking-tight leading-none mb-3 lg:mb-0'>{item}</p>
        ))}
        <div className='start flex items-center gap-3 lg:gap-5'>
          <div className='px-3 lg:px-4 py-1 lg:py-2 border-[2px] border-zinc-500 font-light text-xs lg:text-sm capitalize rounded-full'>Start the project</div>
          <div className='w-8 lg:w-10 h-8 lg:h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;