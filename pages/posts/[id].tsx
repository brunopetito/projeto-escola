import { ObjectType } from 'typescript';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import PostagemContent from '../../components/postagensComponents/postagemContent';
import { request } from '../../lib/datoCMS';

type Props = {
  preview: boolean;
  subscription: {
    initialData: {
      postagem: {
        titulo: string;
        descricao: string;
        galeria: ArrayLike<100>;
        video: any;
      };
    };
  };
};
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
      (postagem: { id: string }) => `/posts/${postagem.id}`
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

export default function PostagemGaleria(props: Props) {
  const dataPostagem = props.subscription.initialData;
  return (
    <div>
      <Layout>
        <div className="w-full flex flex-col h-fit justify-center items-center  ">
          <Header></Header>
          <PostagemContent data={dataPostagem} />
          <Footer></Footer>
        </div>
      </Layout>
    </div>
  );
}
