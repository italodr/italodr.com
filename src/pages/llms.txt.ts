import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { SITE_URL } from "@/consts";

export const GET: APIRoute = async () => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  const content = `# Italo Devoto Ramella Blog\n
    ${posts
      .map(
        (post) => `
## ${post.data.title}\n
${SITE_URL}/${post.data.slug} \n\n
${post.body}`,
      )
      .join("\n\n")}`;
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
