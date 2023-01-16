import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { request } from '../../lib/datoCMS';

const QUERY = `{
  allPostagems {
    id
  }
}`;
export async function getStaticPaths() {
  const data = await request({
    query: QUERY,
    variables: { limit: 10 }
  });

  return {
    paths: data.allPostagems.map(
      (postagem: { id: any }) => `/posts/${postagem.id}`
    ),
    fallback: false
  };
}

export async function getStaticProps({ params, preview = false }: any) {
  const graphqlRequest = {
    query: `
    query MyQuery($id: ItemIdFilter = {}) {
      postagem(filter: {id: $id}) {
        titulo
        video {
          url
        }
        descricao
        galeria {
          url
        }
      }
    }
    
    `,
    preview,
    variables: {
      id: { eq: params.id }
    }
  };
  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_ENV_DATOCMS_API_TOKEN
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest)
          },
      preview
    }
  };
}

export default function PostagemGaleria({ subscription }: any) {
  const dataPostagem = subscription.initialData.postagem;
  return (
    <div>
      <Layout>
        <div className="w-full flex flex-col h-fit justify-center items-center  ">
          <Header></Header>
          <div> {dataPostagem.titulo}</div>
          <Footer></Footer>
        </div>
      </Layout>
    </div>
  );
}
