import React from 'react';
import banner from '../assets/img/banner.png';

const Banner = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-5 '>
      <div className='flex justify-center'><img src={banner} alt="Banner Image" className='h-[300px] p-6'/></div>
      <div className='flex  items-center'>
        <p className='text-6xl font-msans-bold'>Watch everywhere<br/><span className='text-xl py-2  px-1 font-nsans-light md:pr-15'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span></p>
        
      </div>
    </div>
  )
}

export default Banner;
