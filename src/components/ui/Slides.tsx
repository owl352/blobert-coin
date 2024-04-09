import React from "react";
import { SwiperSlide } from "swiper/react";
import { ISlider } from "../../utils/interfaces";
import { SlideBottom } from "./Slide-bottom";
export function Slides({ tokens, tokensData }: ISlider): Array<JSX.Element> {
  const dataForDraw: Array<JSX.Element> = [];
  console.log(Object.keys(tokensData));
  for (let i = 0; i < tokens.length; i++) {
    dataForDraw.push(
      <SwiperSlide
        style={{
          // width: "19vw !important",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <img
            style={{
              width: "17vw",
              border: "1px solid black",
              borderRadius: "15px",
            }}
            src={tokens[i].imageUrls.original}
          />
          <SlideBottom
            tokenId={tokens[i].tokenId}
            name={tokens[i].name}
            tokensData={tokensData}
          />
        </div>
      </SwiperSlide>
    );
  }
  return dataForDraw;
}
