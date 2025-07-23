import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_URL } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "italodr's blog",
    description:
      "Ideas, experiments and neuronal explosions without filter. I don't promise order or conclusions, but at least they're written down.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `${SITE_URL}/${post.data.slug}/`,
    })),
  });
}
