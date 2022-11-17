import type { GetServerSideProps, NextPage } from 'next';
import { getAllCategories, getAllPosts } from '../adapters';

const generateSitemap = (pages: any[]): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(({ frontmatter: { slug, index, rawDate, rawUpdated } }) => {
          if (typeof index !== 'undefined' && index === false) {
            return '';
          }

          return `
       <url>
           <loc>${process.env.NEXT_PUBLIC_SITE_URL}/${slug}</loc>
           <lastmod>${rawUpdated || rawDate || new Date().toJSON().slice(0, 10)}</lastmod>
       </url>
     `;
        })
        .join('')}
   </urlset>
 `;
};

const Sitemap: NextPage<any> = () => {
  // getServerSideProps will do the heavy lifting
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = await getAllPosts({ order: true });
  const categories = await getAllCategories();

  const staticPages = [{ frontmatter: { slug: '' } }, { frontmatter: { slug: 'sitemap' } }];

  const categoriesPages: any[] = [];

  categories.map(category =>
    categoriesPages.push({
      frontmatter: {
        slug: `s/${category}`,
      }
    }),
  );

  const sitemap = generateSitemap([
    ...staticPages,
    ...categoriesPages,
    ...posts,
  ]);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
