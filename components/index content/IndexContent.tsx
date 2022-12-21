import React from 'react';
import Footer from '../Footer';
import Slider from '../Slider';
import Agende from './Agende';
import Postagens from './Postagens';

export default function IndexContent() {
  return (
    <div className=" w-full flex flex-col   items-center text-zinc-700">
      <div className="w-[100%]  max-h-fit ">
        <Slider />
      </div>
      <div className="w-full  ">
        <Agende />
      </div>
      <div className="w-full">
        <Postagens />
      </div>
    </div>
  );
}
