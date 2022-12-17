import Footer from '../components/Footer';
import Header from '../components/Header';
import IndexContent from '../components/index content/IndexContent';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className="text-3xl">
      <Layout>
        <div className="w-full flex flex-col  ">
          <Header></Header>
          <IndexContent />
        </div>
        <Footer></Footer>
      </Layout>
    </div>
  );
}
