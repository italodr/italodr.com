import { FC } from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  index?: boolean;
  follow?: boolean;
}

export const SEO: FC<SEOProps> = ({ title, index, follow, description, canonical }) => {
  const robots = [];
  if (typeof index !== undefined && !index) {
    robots.push('noindex');
  }
  if (typeof follow !== undefined && !follow) {
    robots.push('nofollow');
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" key="charset" />
        <title key="title">{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="description" content={description}></meta>
        <meta property="og:description" content={description} />
        <meta name="robots" content={robots.join(',')} />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
      </Head>
    </>
  );
};
