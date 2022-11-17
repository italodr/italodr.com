import { GetStaticPaths, NextPage } from 'next';
import { Box, Container } from '@chakra-ui/react';
import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import remarkPrism from 'remark-prism';
import remarkParse from 'remark-parse';

import { getAllPosts, getPostBySlug } from '../../adapters';
import { SEO, Layout, Categories, BackLink } from '../../components';

interface Params {
  params: {
    slug: string;
  };
}

interface Content {
  title: string;
  description: string;
  slug: string;
  date: string;
  index?: boolean;
  follow?: boolean;
  updated: string;
  rawDate: string;
  rawUpdated: string;
  terms: string[];
  content: string;
}

const Page: NextPage<any> = ({
    title,
    description,
    index,
    follow,
    slug,
    date,
    rawDate,
    updated,
    rawUpdated,
    terms,
    content
  }: Content) => {
  const basicPage = terms.includes('legal');

  return (
    <Layout>
      <SEO
        title={`${title} :: ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description={description}
        index={index}
        follow={follow}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`}
      />
      <Container as="article" maxW="container.md">
        <Box mb={16}>
          <h1>{title}</h1>
          {!basicPage && <time dateTime={rawUpdated || rawDate}>{updated || date}</time>}
          {updated && (
            <time className="origin" dateTime={rawDate}>
              Publicado el {date}
            </time>
          )}
        </Box>
        <BackLink mb={4} mt={4} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {!basicPage && terms && (
          <Box mt={12} mb={4}>
            <div className="sr-only">Este artículo está listado en las siguientes categorías:</div>
            <Categories terms={terms} />
          </Box>
        )}
        <BackLink mt={8} />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async ({ params: { slug } }: Params) => {
  const { frontmatter, content } = await getPostBySlug(slug);
  const processor = unified()
    .use(remarkParse)
    .use(remarkPrism, {
      plugins: ['line-numbers'],
    })
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false });

  const markdown = processor.processSync(content);
  const formattedContent = markdown.value.toString();

  return {
    props: {
      ...frontmatter,
      content: formattedContent,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  let posts = await getAllPosts({ order: true });

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: 'blocking',
  };
}

export default Page;
