import React from 'react';
import Postagem from './CardPostagem';
import { useRouter } from 'next/router';
export default function Postagens() {
  const router = useRouter();

  return (
    <div className=" w-full flex flex-col justify-center items-center  ">
      <p className="font-medium text-2xl">Atividades Recentes</p>
      <div className="flex flex-col mt-4 gap-6 ">
        <Postagem
          titulo="Natal - 2022"
          subtitulo="Tradicional entrega de presentes e apresentação do natal."
          imgFixed="natal.jpg"
          linkTo="/posts/89897011"
        />

        <Postagem
          titulo="Formatura - 2022"
          subtitulo="Evento de formatura de alguns dos nossos alunos do 1º ano do ensino fundamental."
          imgFixed="teste1.jpg"
          linkTo="/posts/89897136"
        />
        <Postagem
          titulo="Copa - 2022"
          subtitulo="Ornamentação da nossa rua,feita pelos alunos do 3° , 4° e 5°ano."
          imgUrl="recente2.jpg"
          linkTo="/posts/89897296"
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
