import React from 'react';

const Featured = () => {
  return (
    <div className='w-full py-10 lg:py-20'>
      <div className='w-full px-5 lg:px-20 border-b-[1px] border-zinc-700 pb-10 lg:pb-20'>
        <h1 className='text-4xl lg:text-8xl tracking-tight'>Featured projects</h1>
      </div>
      <div className='px-5 lg:px-20'>
        <div className='cards w-full flex flex-col lg:flex-row gap-5 lg:gap-10 mt-5 lg:mt-10'>
          <div className='cardcontainer w-full lg:w-1/2 h-[50vh] lg:h-[75vh]'>
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </div>
          <div className='cardcontainer w-full lg:w-1/2 h-[50vh] lg:h-[75vh]'>
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
