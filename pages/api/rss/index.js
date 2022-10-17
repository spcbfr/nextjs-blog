import nc from "next-connect";
import feed from "./feed.json";
const metadata = {
  title: "Youssef Bouzekri",
  description: "Youssef's personal Blog",
  link: "https://youssefbouzekri.vercel.app",
};
const handler = nc();
/**
 * Respond with an rss.xml
 *
 * @param {object} req NextApiRequest
 * @param {object} res NextApiResponse
 */
handler.get(async (req, res) => {
  try {
    const postItems = feed
      .map((page) => {
        const url = `${
          process.env.NEXT_PUBLIC_ROOT_URL
        }/posts/${page.filePath.replace(".mdx", "")}`;
        return `<item>
          <title>${page.data.title}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${page.data.date}</pubDate>
          ${
            page.data.excerpt &&
            `<description>${page.data.excerpt}</description>`
          }
          <content:encoded>${page.content}</content:encoded>
        </item>`;
      })
      .join("");
    // Add urlSet to entire sitemap string
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
      <title>${metadata.title}</title>
      <description>${metadata.description}</description>
      <link>${metadata.link}</link>
      <lastBuildDate>${feed[0].data.date}</lastBuildDate>
      ${postItems}
      </channel>
      </rss>`;
    // set response content header to xml
    res.setHeader("Content-Type", "text/xml");
    return res.status(200).send(sitemap);
  } catch (e) {
    if (!(e instanceof Error)) {
      throw e;
    }
    return res.status(500).json({ error: e.message || "" });
  }
});
export default handler;
