import React, { ReactNode } from 'react';

interface postagemGaleriaProps {
  data: {
    postagem: {
      titulo: string;
      descricao: string;
      galeria: any;
      video: any;
    };
  };
}

export default function postagemContent({ data }: postagemGaleriaProps) {
  const { titulo, descricao, galeria, video } = data.postagem;

  return (
    <div className="flex flex-col mt-4 items-center justify-center ">
      <div className="flex flex-col items-center justify-center mx-2">
        <p className="text-2xl font-semibold">{titulo}</p>
        <p>{descricao}</p>
      </div>

      <div>
        {galeria.map((foto: { url: string }) => {
          return (
            <div key={foto.url} className="py-1 flex justify-center">
              <picture>
                <img src={foto.url} alt="" />
              </picture>
            </div>
          );
        })}
      </div>
    </div>
  );
}
