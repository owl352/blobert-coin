import React from "react";
import { Slides } from "./ui/Slides";
import { Swiper } from "swiper/react";
import { ISlider } from "../utils/interfaces";
import { Mousewheel } from "swiper/modules";
import "./css/swiper.css"
import "swiper/css";
import "swiper/css/pagination";
export default function TokenSlider({ tokens, tokensData }: ISlider) {
  const dataForDraw = Slides({ tokens: tokens, tokensData });

  return (
    <Swiper
      modules={[Mousewheel]}
      spaceBetween={0}
      centerInsufficientSlides={true}
      slidesPerView={tokens.length<3?tokens.length:3}
      mousewheel={true}
      centeredSlides={true}
      loop={tokens.length>3}
      style={{
        zIndex: "100",
        width: "65vw",
        left: tokens.length>3?"-1.5vw":""
      }}
    >
      {dataForDraw}
    </Swiper>
  );
}
