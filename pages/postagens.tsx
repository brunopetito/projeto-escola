import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Postagem from '../components/Postagem';
import { request } from '../lib/datoCMS';

export default function Postagens({ data }: any) {
  const [page, setPage] = useState<Number>(1);
  const inicio = 3 * (+page - 1);
  const fim = 3 * +page;

  return (
    <div>
      <Layout>
        <div className="w-full flex flex-col h-fit justify-center items-center  ">
          <Header />
          <div className="flex flex-col m-auto gap-4 my-10 ">
            {data.allPostagems.slice(inicio, fim).map((postagem: any) => {
              return (
                <Postagem
                  key={postagem.id}
                  imgUrl={postagem.capa.url}
                  subtitulo={postagem.descricao}
                  titulo={postagem.titulo}
                  linkTo={`posts/${postagem.id}`}
                />
              );
            })}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Mostrando{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                {inicio + 1}
              </span>{' '}
              até{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                {data.allPostagems.length < fim
                  ? data.allPostagems.length
                  : fim}
              </span>{' '}
              das{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                {data.allPostagems.length}
              </span>{' '}
              Postagens
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => {
                  if (page > 1) {
                    setPage(+page - 1);
                  }
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Prev
              </button>
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => {
                  if (page < data.allPostagems.length / 3) {
                    setPage(+page + 1);
                  }
                }}
              >
                Next
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
    </div>
  );
}
const POSTS_QUERY = `
  {
    allPostagems {
      id
      titulo
      descricao
      capa {
        url
      }
    }
  }
  `;

export async function getStaticProps() {
  const data = await request({
    query: POSTS_QUERY,
    variables: { limit: 10 }
  });
  return {
    props: { data }
  };
}
