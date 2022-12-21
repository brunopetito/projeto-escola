import Footer from '../components/Footer';
import Header from '../components/Header';
import IndexContent from '../components/index content/IndexContent';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="w-full flex flex-col h-fit  ">
          <Header></Header>
          <IndexContent />
          <Footer />
        </div>
      </Layout>
    </div>
  );
}
