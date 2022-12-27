import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import PostagensContent from '../components/postagens content/PostagensContent.tsx';

export default function postagens() {
  return (
    <div>
      <Layout>
        <div className="w-full flex flex-col h-fit  ">
          <Header></Header>
          <PostagensContent></PostagensContent>
          <Footer />
        </div>
      </Layout>
    </div>
  );
}
