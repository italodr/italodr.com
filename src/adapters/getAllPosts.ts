import fs from 'fs';
import { postsDirectory, getPostBySlug } from './getPostBySlug';

interface Props {
  order?: boolean;
  term?: string | null;
}

const orderByDate = (prev: any, curr: any) =>
  new Date(curr.frontmatter.rawUpdate || curr.frontmatter.rawDate).getTime() -
  new Date(prev.frontmatter.rawUpdate || prev.frontmatter.rawDate).getTime();

export const getAllPosts = ({ order = true, term = null }: Props) => {
  const slugs = fs.readdirSync(postsDirectory);
  let posts = slugs.map((slug) => getPostBySlug(slug));

  posts = posts.filter(({ frontmatter: { terms } }) => terms && !terms.includes('template'));

  if (process.env.NODE_ENV === 'production') {
    posts = posts
      .filter(({ frontmatter: { terms, published } }) =>
        published &&
        (!terms || (
          terms &&
          !terms.includes('demo')
        ))
      );
  }

  if (term) {
    posts = posts.filter(({ frontmatter: { terms } }) => terms.includes(term));
  }

  if (order) {
    posts.sort(orderByDate);
  }

  return posts;
};
