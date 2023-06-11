import React, { useEffect, useState } from "react";
import "./slider.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import res1 from '../../../pictures/sliders/mobile1.jpg'
import res2 from '../../../pictures/sliders/mobile2.jpg'
import res3 from '../../../pictures/sliders/mobile3.jpg'
import res4 from '../../../pictures/sliders/2.jpg'
import res5 from '../../../pictures/sliders/4.jpg'
import res6 from '../../../pictures/sliders/5.jpg'


function Slider() {



 
  return (
    <div className="slider-container slick-slider">
        <Carousel className="main-slide slick-slider lg">
            <div >
                <img src={res4} alt="" height="630px" />
                <p className="legend">Yenice Oto Kurtarma</p>
            </div>
            <div >
                <img src={res5} alt="" height="600px" />
                <p className="legend">Yenice Oto Kurtarma</p>
            </div>
            <div >
                <img src={res6} alt="" height="600px" />
                <p className="legend">Yenice Oto Kurtarma</p>
            </div>

           

        </Carousel> 
        <Carousel className="main-slide sm">
            

            <div >
                <img src={res1} alt="" height="630px" />
                <p className="legend">Yenice Oto Kurtarma</p>
            </div>
            <div >
                <img src={res2} alt="" height="600px" />
                <p className="legend">Yenice Oto Kurtarma</p>
            </div>
            <div >
                <img src={res3} alt="" height="600px" />
                <p className="legend">Yenice Oto Kurtarma</p>
            </div>

        </Carousel> 
    </div>
  );
}

export default Slider;