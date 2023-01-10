import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';
import styles from './relatos.module.css';

export default function Relatos() {
  const [alturaY, setAlturaY] = useState<Boolean>(false);
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -1650) {
      setAlturaY(true);
    }
  });

  return (
    <div className="flex flex-col ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill="#881305"
          fillOpacity="1"
          d="M0,96L120,112C240,128,480,160,720,170.7C960,181,1200,171,1320,165.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#881305] py-4">
        <div
          className={`${
            alturaY && styles.animation
          } px-10 flex flex-col justify-center items-center`}
        >
          <picture className={!alturaY ? '-z-20' : 'z-10'}>
            <img src="/relato.jpg" alt="" className="h-40 rounded-full" />
          </picture>

          <p
            className={`text-[#fefef2] text-sm mt-4 ${
              !alturaY ? '-z-20' : 'z-10'
            }`}
          >
            A melhor, escola do mundo ,porque além da educação eles têm amor
            ,TODOS são sensacionais! Só tenho uma reclamação a fazer , acho um
            absurdo só ter o ensino fundamental 😭 não sei o que vou fazer no
            ensino médio ! Já estou chorando, e me preparando
            psicologicamente.Sou uma petiteira Apaixonada.
          </p>
        </div>
      </div>
    </div>
  );
}
function executeScroll() {
  throw new Error('Function not implemented.');
}
