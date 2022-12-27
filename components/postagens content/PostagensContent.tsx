import React from 'react';
import Postagem from '../Postagem';

export default function postagensContent() {
  return (
    <div className=" w-full flex flex-col   items-center text-zinc-700 pt-8">
      <p className="font-medium text-2xl mb-6">Todas Atividades</p>
      <div className="flex flex-col gap-4">
        <Postagem
          titulo="Formatura - 2022"
          subtitulo="Evento de formatura de alguns dos nossos alunos do 1º ano do ensino fundamental."
          imgUrl="teste1"
        />

        <Postagem
          titulo="Copa - 2022"
          subtitulo="Ornamentação da nossa rua,feita pelos alunos do 3° , 4° e 5°ano."
          imgUrl="recente2"
        />

        <Postagem
          titulo="Desfile de Primaveira "
          subtitulo="Nosso tradicional desfile de primaveira no ano de 2022."
          imgUrl="desfile"
        />
      </div>
    </div>
  );
}
