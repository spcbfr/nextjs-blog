import { MetadataRoute } from "next";
import { allPosts } from ".contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  let pages = allPosts.map((post) => {
    return {
      url: `https://yusuf.fyi/posts/${post.slug}`,
      lastModified: new Date(),
    };
  });
  pages.push({
    url: "https://yusuf.fyi",
    lastModified: new Date(),
  });
  return pages;
}
