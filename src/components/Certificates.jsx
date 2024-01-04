import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../index.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


import slide_image_1 from '../assets/certificates/html.png';
import slide_image_2 from '../assets/certificates/html5.png';
import slide_image_3 from '../assets/certificates/javascript.png';
import slide_image_4 from '../assets/certificates/java.png';
import slide_image_5 from '../assets/certificates/db.png';
import slide_image_6 from '../assets/certificates/scrum.png';
import slide_image_7 from '../assets/certificates/1.png';
import slide_image_8 from '../assets/certificates/2.png';
import slide_image_9 from '../assets/certificates/selenium.png';
import slide_image_10 from '../assets/certificates/excel.png';
import slide_image_11 from '../assets/certificates/outlook.png';
import slide_image_12 from '../assets/certificates/teams.png';
import slide_image_13 from '../assets/certificates/word.png';
import slide_image_14 from '../assets/certificates/advanced-word.png';
import slide_image_15 from '../assets/certificates/photoshop.png';


const Certificates = () => {
  return (
    <div id='certificates'
      className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-10 md:mt-10'>
      <div className='lg:max-w-[1400px] lg:h-[980px] m-auto w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
        <h4 className='text-3xl font-bold text-black text-center'>
          Certificates
        </h4>

        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_12} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_13} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_14} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_15} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

  )
}

export default Certificates