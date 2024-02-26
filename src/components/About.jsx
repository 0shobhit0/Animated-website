import React from 'react';

const About = () => {
  return (
    <div className='w-full p-10 lg:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-lg lg:text-4xl leading-[4.5vw] lg:leading-[5vw] tracking-tight mb-5 lg:mb-10'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className='w-full flex flex-col lg:flex-row gap-5 lg:gap-10 border-t-[1px] pt-5 lg:pt-10 mt-10 lg:mt-20 border-[#a1b562]'>
        <div className='w-full lg:w-1/2'>
          <h1 className='text-2xl lg:text-7xl mb-5 lg:mb-4'>Our Approach</h1>
          <button className='flex gap-3 items-center px-6 lg:px-10 py-4 lg:py-6 bg-zinc-900 rounded-full text-white mt-5 lg:mt-0'>
            Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-full lg:w-1/2 h-[30vh] lg:h-[70vh] rounded-3xl overflow-hidden bg-[#b0c859]'>
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
