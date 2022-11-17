import fs from 'fs';
import { getAllPosts } from './getAllPosts';

export const getAllCategories = () => {
  const posts = getAllPosts({ order: false });
  let categories: string[] = [];

  posts.map(post => (categories = post.frontmatter.terms ? [...categories, ...post.frontmatter.terms] : categories));

  categories = [...new Set(categories)];
  categories.sort();

  return categories;
};
