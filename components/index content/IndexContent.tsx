import React from 'react';
import Slider from '../Slider';
import Agende from './Agende';

export default function IndexContent() {
  return (
    <div className=" w-full flex flex-col  h-screen items-center ">
      <div className="w-[100%]  max-h-fit">
        <Slider />
      </div>
      <div className="w-full mt-5">
        <Agende />
      </div>
    </div>
  );
}
