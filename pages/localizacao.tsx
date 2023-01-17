import Footer from '../components/Footer';
import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default function localizacao() {
  return (
    <div>
      <Layout>
        <div className="w-full flex flex-col items-center h-screen">
          <Header></Header>
          <div className="py-8 flex flex-col justify-center items-center">
            <p className=" text-2xl font-semibold">Nossa Localização</p>
            <p className="px-4">
              Rua Carlos Maia, 149 - Porto Velho, São Gonçalo - RJ
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.273296173212!2d-43.091314633823636!3d-22.836041686288382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999b53cbe568e5%3A0xef3b5ddd74cacc75!2sEscola%20Petito%20Teixeira!5e0!3m2!1spt-BR!2sbr!4v1673883755869!5m2!1spt-BR!2sbr"
            loading="lazy"
            className="w-full h-full"
          ></iframe>

          <Footer />
        </div>
      </Layout>
    </div>
  );
}
