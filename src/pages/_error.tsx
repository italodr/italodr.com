import { NextPage } from 'next';
import Link from 'next/link';
import { Container, Heading, Image, Text } from '@chakra-ui/react';
import { getAllCategories } from '../adapters';
import { Categories as CategoriesList, Layout, SEO } from '../components';

const ErrorPage: NextPage<any> = ({ categories }) => {
  return (
    <Layout>
      <SEO
        title={`Página no encontrada :: ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description=""
        index={false}
        follow={false}
        canonical={process.env.NEXT_PUBLIC_SITE_URL || ''}
      />
      <Container maxW="container.sm">
        <Image src="/404-bg.webp" mb={8} alt="" aria-hidden="true" />
        <Heading as="h1" fontSize="2xl">Esta página no existe.</Heading>
        <Text>
          Puede que exista un error en el link de referencia o que esa página ya no exista.
          Puedes seleccionar una de las categorías de abajo o{' '}
          <Link href="/">volver a la página de inicio</Link>.
          <CategoriesList terms={categories} my={8} />
        </Text>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const categories = await getAllCategories();

  return {
    props: {
      categories,
    },
  };
};

export default ErrorPage;
