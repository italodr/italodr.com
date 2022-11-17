import { Container, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import { getAllPosts } from '../adapters';
import { Card, Layout, PostsList, SEO } from '../components';

const Home: NextPage<any> = ({ posts }) => {
  return (
    <Layout>
      <SEO
        title={process.env.NEXT_PUBLIC_SITE_NAME || ''}
        description=""
        index={true}
        follow={true}
        canonical={process.env.NEXT_PUBLIC_SITE_URL || ''}
      />
      <Container maxW="container.sm">
        <Heading as="h1" mb={12}>Artículos</Heading>
        <Card />
        <PostsList posts={posts} />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllPosts({ order: true });
  return {
    props: {
      posts,
    },
  };
};

export default Home;
