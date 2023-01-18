import React from 'react';

interface PostagemProps {
  titulo: string;
  subtitulo: string;
  imgUrl?: string;
  linkTo?: string;
  imgFixed?: string;
}

export default function Postagem({
  titulo,
  subtitulo,
  imgUrl,
  linkTo,
  imgFixed
}: PostagemProps) {
  return (
    <a href={linkTo ? linkTo : '#'}>
      <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md  ">
        <picture>
          <img
            className="rounded-t-lg"
            src={imgFixed ? imgFixed : imgUrl}
            alt=""
          />
        </picture>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {titulo}
          </h5>

          <p className="mb-3 font-normal text-gray-700 ">{subtitulo}</p>
        </div>
      </div>
    </a>
  );
}
