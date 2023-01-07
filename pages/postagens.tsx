import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Postagens() {
  return (
    <div>
      <Layout>
        <div className="w-full flex flex-col h-fit  ">
          <Header></Header>

          <Footer />
        </div>
      </Layout>
    </div>
  );
}
