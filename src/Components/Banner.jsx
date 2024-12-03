import React, { useEffect, useState } from 'react';
// import image from '../../src/assets/images.jpeg';
import bg from '../../src/assets/bg.jpg'
import slider1 from '../../src/assets/slider11.jpg'
import slider2 from '../../src/assets/slider22.jpg'
import slider3 from '../../src/assets/slider33.jpg'



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import {  Scrollbar, A11y, EffectCube, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';

import { Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div className=''>
    <Swiper
    modules={[Navigation, Pagination,Autoplay, Scrollbar, A11y, EffectCube]}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{
      delay: 2500, 
      disableOnInteraction: false,
      
    }}
    onSlideChange={() => 'slide change'}
    onSwiper={(swiper) => swiper}
    style={{backgroundImage: `linear-gradient(#00000080, #00000080), url(${bg})`}}
  >
    

      <SwiperSlide className='min-h-screen'>

<img className="w-screen h-screen object-cover" src={slider1} alt="" />

    </SwiperSlide>

      <SwiperSlide >

      <img className="w-screen h-screen object-cover" src={slider2} alt="" />

      </SwiperSlide>

      <SwiperSlide >
      <img className="w-screen h-screen object-cover" src={slider3} alt="" />


      </SwiperSlide>
    

  </Swiper>
  </div>
  );
};

export default Banner;



