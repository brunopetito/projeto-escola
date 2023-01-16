import React, { useState } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import TemporaryDrawer from './Drawer';
export default function Header() {
  const router = useRouter();
  return (
    <div className=" text-2xl w-full flex  justify-between py-2 px-3 items-center border-b-2 border-[#F9F3EB]">
      <div onClick={() => router.push('/')} className="hover:cursor-pointer">
        <picture>
          <img
            className=" w-[180px] h-auto priority"
            src={'/colorida.svg'}
            width="180"
            height="80"
            alt={'logo da escola'}
          ></img>
        </picture>
      </div>

      <TemporaryDrawer />
    </div>
  );
}
