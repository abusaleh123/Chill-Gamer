import React, { useEffect, useState } from 'react';
// import image from '../../src/assets/images.jpeg';
import bg from '../../src/assets/bg.jpg'
import slider1 from '../../src/assets/slider5.jpg'
import slider2 from '../../src/assets/slider6.jpg'
import slider3 from '../../src/assets/slider4.jpg'
// import slideImage1 from '../../src/assets/logo1.png'
import slideImage2 from '../../src/assets/logo2.png'



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import {  Scrollbar, A11y, EffectCube, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';

import { Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='relative min-h-screen'>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube]}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{
      delay: 2500, 
      disableOnInteraction: false,
      
    }}
    onSlideChange={() => 'slide change'}
    onSwiper={(swiper) => swiper}
   
  >
    

      <SwiperSlide style={{  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slider1})`,  backgroundPosition: 'center',
    backgroundSize: 'cover',}} className=' flex justify-center  relative items-center my-auto  mx-auto'>
{/* <img className="w-screen h-screen object-cover relative" src={slider1} alt="" /> */}
<div >

     <div className='flex flex-col justify-center items-center min-h-screen'>
     <h1 className='text-white lg:mb-8 text-xl lg:text-6xl font-bold w-2/4 text-center '>The Best Game Reviews for Every Genre, Platform, and Player</h1>
    
      <p className='lg:w-3/4 text-center  text-[#969692] font-semibold lg:mb-10 lg:text-lg lg:tracking-normal lg:leading-8'>Your go-to source for game reviews tailored to your preferences. Explore diverse genres and platforms with detailed critiques and ratings to ensure your next game is a perfect match.</p>
    
   
     </div>
      </div>
 

    </SwiperSlide>
      <SwiperSlide style={{  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slider2})`,  backgroundPosition: 'center',
    backgroundSize: 'cover',}} className=''>
{/* <img className="w-screen h-screen object-cover relative" src={slider1} alt="" /> */}
<div >

     <div className='flex flex-col justify-center items-center w-full min-h-screen'> 
     <h1 className='text-white lg:mb-8 text-xl lg:text-6xl font-bold w-2/4 text-center'>Explore, Review, and Play: Your Ultimate Gaming Companion Hub</h1>
    
      <p className='lg:w-3/4 text-center text-[#acaca7] font-semibold lg:mb-10 lg:text-lg lg:tracking-normal lg:leading-8'> Discover the latest games, read in-depth reviews, and dive into expert recommendations. From action-packed adventures to strategic simulations, we’re here to guide every player through their gaming journey.</p>
    
   
     </div>
      </div>
 

    </SwiperSlide>
      <SwiperSlide style={{  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slider3})`,  backgroundPosition: 'center',
    backgroundSize: 'cover',}} >
{/* <img className="w-screen h-screen object-cover relative" src={slider1} alt="" /> */}
<div className=' '>

     <div className='flex flex-col justify-center items-center w-full min-h-screen'>
     <h1 className='text-white lg:mb-8 text-xl lg:text-6xl font-bold w-2/4 text-center'>Unbiased Game Reviews for Gamers on Every Platform Worldwide</h1>
     
      <p className='lg:w-3/4 text-center text-[#acaca7] font-semibold lg:mb-10 lg:text-lg lg:tracking-normal lg:leading-8'>Stay informed with fair and detailed reviews of the latest games across all platforms. Whether you’re on PC, console, or mobile, we bring you honest insights to help you choose the best gaming experiences.</p>
    
   
     </div>
      </div>
 

    </SwiperSlide>
        
    
    

  </Swiper>
  </div>
  );
};

export default Banner;



