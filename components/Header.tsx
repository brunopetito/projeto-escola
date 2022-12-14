import React, { useState } from 'react';
import MenuMobile from './MenuMobile';

import Image from 'next/image';
import TemporaryDrawer from './Drawer';
export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" text-2xl w-full flex  justify-between py-2 px-3 items-center">
      <Image
        src={'/colorida.svg'}
        width={180}
        height={80}
        alt={'logo da escola'}
      ></Image>
      <TemporaryDrawer />
    </div>
  );
}
