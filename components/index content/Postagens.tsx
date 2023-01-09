import React from 'react';
import Postagem from '../Postagem';
import { useRouter } from 'next/router';
export default function Postagens() {
  const router = useRouter();

  return (
    <div className=" w-full flex flex-col justify-center items-center  ">
      <p className="font-medium text-2xl">Atividades Recentes</p>
      <div className="flex flex-col mt-4 gap-6 ">
        <Postagem
          titulo="Formatura - 2022"
          subtitulo="Evento de formatura de alguns dos nossos alunos do 1º ano do ensino fundamental."
          imgFixed="teste1.jpg"
        />

        <Postagem
          titulo="Copa - 2022"
          subtitulo="Ornamentação da nossa rua,feita pelos alunos do 3° , 4° e 5°ano."
          imgUrl="recente2.jpg"
        />

        <Postagem
          titulo="Desfile de Primaveira "
          subtitulo="Nosso tradicional desfile de primaveira no ano de 2022."
          imgUrl="desfile.jpg"
        />

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 w-full focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => router.push('/postagens')}
        >
          Ver mais
        </button>
      </div>
    </div>
  );
}
