import React from 'react';

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex flex-col lg:flex-row items-center px-5 lg:px-32 gap-5'>
      <div className='cardcontainer h-[50vh] lg:h-full w-full lg:w-1/2'>
        <div className='relative card rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2024</button>
        </div>
      </div>
      <div className='cardcontainer flex flex-col lg:flex-row gap-5 w-full lg:w-1/2 h-[50vh] lg:h-full'>
        <div className='relative card rounded-xl w-full lg:w-1/2 h-full flex items-center justify-center bg-[#192826]'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute px-5 py-1 rounded-full border-2 left-5 lg:left-10 bottom-5 lg:bottom-8'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='relative card rounded-xl w-full lg:w-1/2 h-full flex items-center justify-center bg-[#192826]'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute px-2 py-1 rounded-full border-2 left-5 lg:left-10 bottom-5 lg:bottom-8'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
