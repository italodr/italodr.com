import fs from 'fs';
import { extname, join, resolve } from 'path';
const matter = require('gray-matter');

export const postsDirectory = resolve(process.cwd(), 'src', 'posts');

export const getPostBySlug = (slug: string) => {
  if (!slug) return {};

  const ext = extname(slug);
  const realSlug = slug.replace(ext, '');
  let fullPath = join(postsDirectory, `${realSlug}${ext || '.md'}`);

  if (!fs.existsSync(fullPath)) {
    fullPath = join(postsDirectory, `${realSlug}.mdx`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const rawDate = data.date;
  const date = new Date(rawDate).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const rawUpdated = data.updated || null;
  let updated = null;

  if (rawUpdated) {
    updated = new Date(rawUpdated).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return { slug: realSlug, frontmatter: { ...data, date, updated, rawDate, rawUpdated }, content };
};
