import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: 'none', background: 'green' }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none', background: 'red' }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Slider {...settings} className="flex justify-center items-center ">
      <div>
        <picture className="flex justify-center h-96">
          <img src="/dune.jpg" alt="foto duna" />
        </picture>
      </div>
      <div>
        <picture className="flex justify-center h-96 ">
          <img src="/student.jpg" alt="foto duna" />
        </picture>
      </div>
      <div>
        <picture className="flex justify-center h-96 ">
          <img src="/books.jpg" alt="foto duna" />
        </picture>
      </div>
    </Slider>
  );
}
