import Footer from '../components/Footer';
import Header from '../components/Header';
import Formulario from '../components/index content/Formulario';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Layout from '../components/Layout';

export default function Contato() {
  return (
    <div>
      <Layout>
        <div className="w-full flex flex-col h-screen ">
          <div className="flex-grow">
            <Header></Header>
            <div className="flex flex-col items-center ">
              <p className="text-2xl font-semibold py-4">Contato</p>
              <picture className="mb-3">
                <img src="/contact.svg" alt="" />
              </picture>

              <div className="flex justify-center ">
                <a href="https://www.facebook.com/petitoteixeira">
                  <FacebookIcon fontSize="large" />
                </a>
                <a href="https://www.instagram.com/escolapetitoteixeira/">
                  <InstagramIcon fontSize="large" />
                </a>
                <a href="https://www.instagram.com/escolapetitoteixeira/">
                  <WhatsAppIcon fontSize="large" />
                </a>
              </div>
              <p> escolapetitoteixeira@gmail.com</p>
            </div>

            <div className=" flex flex-col mx-5 mt-8 items-center ">
              <p className="mb-6 text-xl font-medium">
                Preencha o formulário e entraremos em contato
              </p>
              <Formulario />
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-8 sm:w-auto  py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Enviar
              </button>
            </div>
          </div>

          <Footer />
        </div>
      </Layout>
    </div>
  );
}
