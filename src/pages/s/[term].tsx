import { GetStaticPaths, NextPage } from 'next';
import Link from 'next/link';
import { Container, Heading, Text } from '@chakra-ui/react';
import { getAllPosts, getAllCategories } from '../../adapters';
import { BackLink, Categories as CategoriesList, Layout, PostsList, SEO } from '../../components';

interface Params {
  params: {
    term: string;
  };
}

const Categories: NextPage<any> = ({ categories, posts, term }) => {
  return (
    <Layout>
      <SEO
        title={`Categoría ${term} :: ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description=""
        index={true}
        follow={true}
        canonical={process.env.NEXT_PUBLIC_SITE_URL || ''}
      />
      <Container maxW="container.sm">
        <Heading as="h1">Categoría: {term}</Heading>
        <Text mb={12}>{`Tu búsqueda por "${term}" ha obtenido ${posts.length} resultados.`}</Text>
        <BackLink mb={4} mt={4} />
        {posts.length ? (
          <>
            <PostsList posts={posts} />
            <BackLink mt={8} />
          </>
        ) : (
          <Text>
            Puede que exista un error en el link de referencia o que esa categoría ya no exista.
            Puedes seleccionar una de las categorías de abajo o{' '}
            <Link href="/">volver a la página de inicio</Link>:
            <CategoriesList terms={categories} my={8} />
          </Text>
        )}
      </Container>
    </Layout>
  );
};

export const getStaticProps = async ({ params: { term } }: Params) => {
  const posts = await getAllPosts({ order: true, term });
  const categories = await getAllCategories();

  return {
    props: {
      categories,
      posts,
      term,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let categories = await getAllCategories();

  return {
    paths: categories.map(term => ({
      params: {
        term,
      },
    })),
    fallback: 'blocking',
  };
};

export default Categories;
