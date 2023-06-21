import React, { useEffect, useRef, useState } from "react";
import "./slider.css";
import res1 from '../../../pictures/sliders/mobile1.jpg'
import res2 from '../../../pictures/sliders/mobile2.jpg'
import res3 from '../../../pictures/sliders/mobile3.jpg'


import "./slider.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




function Slider() {

    const [width, setWidth] = useState();

    useEffect(()=>{
      setWidth(window.innerWidth)
    },[window])
    useEffect(()=>{
      console.log(width)
    },[width])

    const sliderPosts = [
        {
            id:"1",
            img:res1,
            title:"asdas",
            description:"asdasd"
        },
        {
          id:"1",
          img:res2,
          title:"asdas",
          description:"asdasd"
        },
        {
          id:"1",
          img:res3,
          title:"asdas",
          description:"asdasd"
        },
    ]




  return (
    <div className="slider-container">
      <i className="fa-solid fa-arrow-left review-swiper-button-prev"></i>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation={{
          nextEl: '.review-swiper-button-next',
          prevEl: '.review-swiper-button-prev',
        }}  
        loop={true}
        className='swiper'
      >
        {
          sliderPosts.map(p => (
            <SwiperSlide key={p.id} className='swiper-slide'>
              <div className="slide-img">
                <img src={p.img} alt="" />
              </div>
              <div className="slider-text">
               <p>
               "Her Zaman Yanınızdayız"
               </p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <i className="fa-solid fa-arrow-right review-swiper-button-next"></i>
      
    </div>
  );
}
export default Slider;