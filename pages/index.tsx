import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className="text-3xl">
      <Layout>
        <div className="w-full">
          <Header></Header>
        </div>
        <Footer></Footer>
      </Layout>
    </div>
  );
}
