import { getMonth } from "date-fns";
import nc from "next-connect";
import feed from "./feed.json";
const metadata = {
  title: "Youssef Bouzekri",
  description: "Youssef's personal Blog",
  link: "https://youssefbouzekri.vercel.app",
};
const arrayofgooddate = feed[0].data.date.split("-");

function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "short",
  });
}

const fullDate = new Date(
  arrayofgooddate[0],
  arrayofgooddate[1] + 1,
  arrayofgooddate[2]
);
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayofweek = days[fullDate.getDay()];
const goodDate =
  dayofweek +
  ", " +
  arrayofgooddate[2] +
  " " +
  toMonthName(arrayofgooddate[1]) +
  " " +
  arrayofgooddate[0] +
  " 05:00:00 EST";
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
        const url = `https://youssefbouzekri.vercel.app/posts/${page.filePath.replace(
          ".mdx",
          ""
        )}`;
        return `<item>
          <title>${page.data.title}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${page.data.date}</pubDate>
          ${
            page.data.slogan && `<description>${page.data.slogan}</description>`
          }
          <content:encoded>Go read my blog on the website, I am not currently showing the content of any blogpost because some of them contain things that RSS readers can't render but this might change very soon </content:encoded>
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

      <atom:link href="https://youssefbouzekri.vercel.app/rss.xml" rel="self" type="application/rss+xml" />
      <pubDate>${goodDate}</pubDate>
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
