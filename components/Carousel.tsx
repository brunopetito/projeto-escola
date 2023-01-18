import React, { useState } from 'react';
import Slider from 'react-slick';

interface CarouselProps {
  data: Array<Array<string>>;
}

export default function Carousel({ data }: CarouselProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <div
          key={item[0]}
          className="flex mx-4 items-center justify-center r min-h-[300px] "
        >
          <picture className="flex flex-col items-center ">
            <img src={item[0]} alt="" className="h-40 w-40 rounded-full" />
            <span className="mb-2 font-bold px-4 text-[#F9B826]">
              {item[2]}
            </span>
          </picture>
          <p className="px-4 text-white">{item[1]}</p>
        </div>
      ))}
    </Slider>
  );
}
