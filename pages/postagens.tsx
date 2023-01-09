import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Postagem from '../components/Postagem';
import { request } from '../lib/datoCMS';

export default function Postagens({ data }: any) {
  console.log(data.allPostagems[0].capa.url);
  return (
    <div>
      <Layout>
        <div className="w-full flex flex-col h-fit   ">
          <Header />
          <div className="flex flex-col m-auto gap-4 my-10 ">
            {data.allPostagems.map((postagem: any) => {
              return (
                <Postagem
                  key={postagem.id}
                  imgUrl={postagem.capa.url}
                  subtitulo={postagem.descricao}
                  titulo={postagem.titulo}
                />
              );
            })}
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
