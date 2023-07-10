
import '../../styles/testimonials.css'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import avatar01 from '../../assets/img/avatar01.png'

export default function Testimonials() {
  return (
    <>
    <section>
<div className="container sliders">
    <h2 className="section__title">
        Testimonials
    </h2>
<Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide__item">
                <div className="slide__img-01">
                    <img src={avatar01} alt="" />
                </div>
                <h4>Hello world</h4>
                <p>Just search for an icon on remixicon.com and look for its name.
The name translates to PascalCase followed by the suffix Icon in remixicon-react.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>  <div className="slide__item">
                <div className="slide__img-02">
                    <img src={avatar01} alt="" />
                </div>
                <h4>Hello world</h4>
                <p>Just search for an icon on remixicon.com and look for its name.
The name translates to PascalCase followed by the suffix Icon in remixicon-react.</p>
            </div></SwiperSlide>
        <SwiperSlide>  <div className="slide__item">
                <div className="slide__img-03">
                    <img src={avatar01} alt="" />
                </div>
                <h4>Hello world</h4>
                <p>Just search for an icon on remixicon.com and look for its name.
The name translates to PascalCase followed by the suffix Icon in remixicon-react.</p>
            </div></SwiperSlide>
       
      </Swiper>
</div>
    </section>
    </>
  );
}
