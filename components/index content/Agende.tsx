import React from 'react';
import Formulario from './Formulario';

export default function Agende() {
  return (
    <div className=" w-full flex flex-col  bg-contain justify-center  items-center ">
      <div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-medium text-2xl">Conheça nossa Escola</span>
          <span className="text-base text-zinc-600">
            Preencha o formulário e entraremos em contato!
          </span>
        </div>

        <div className="flex flex-col items-center my-4 mb-0">
          <Formulario />
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-8 sm:w-auto  py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
