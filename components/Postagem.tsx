import React from 'react';

interface PostagemProps {
  titulo: string;
  subtitulo: string;
  imgUrl: string;
  linkTo?: string;
}

export default function Postagem({
  titulo,
  subtitulo,
  imgUrl,
  linkTo
}: PostagemProps) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md  ">
      <a href={linkTo ? linkTo : '#'}>
        <picture>
          <img className="rounded-t-lg" src={`/${imgUrl}.jpg`} alt="" />
        </picture>
      </a>
      <div className="p-5">
        <a href={linkTo ? linkTo : '#'}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {titulo}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">{subtitulo}</p>
      </div>
    </div>
  );
}
