import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

export default function PostagemGaleria() {
  const { query } = useRouter();

  console.log(query);
  console.log(query.id);

  //   ????
  return (
    <div>
      <Layout>
        <div className="w-full flex flex-col h-fit justify-center items-center  ">
          <Header></Header>
          <Footer></Footer>
        </div>
      </Layout>
    </div>
  );
}
