import { Feed } from "feed";
import fs from "fs";
import { allPosts, type Post } from "contentlayer/generated";
export const generateRssFeed = async () => {
  const siteURL = process.env.SITE_URL;

  const sortedPostsForRSS = allPosts.sort((a, b) => {
    return Number(new Date(a.date)) - Number(new Date(b.date));
  });

  const filtredPostsForRSS = sortedPostsForRSS.filter((post) => !post.unlisted);

  const date = new Date(filtredPostsForRSS[filtredPostsForRSS.length - 1].date);

  const author = {
    name: "Yusuf Bouzekri",

    email: "youssefbouzekri@proton.me",

    link: "https://fosstodon.org/web/@spacebuffer",
  };

  const feed = new Feed({
    title: "Yusuf Bouzekri's Blog",

    description: "A Developer that blogs",

    id: "yusuf.fyi",

    link: siteURL,

    copyright: `All rights reserved ${date.getFullYear()}, Yusuf Bouzekri`,

    updated: date,

    generator: "Feed for Node.js",

    feedLinks: {
      rss2: `${siteURL}/rss.xml`,

      json: `${siteURL}/rss.json`,
    },

    author,
  });

  filtredPostsForRSS.forEach((post) => {
    const url = `${siteURL}/posts/${post.slug}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      date: new Date(post.date),
      description: post.description,
      content: `<p>${post.description}</p> <br/> <strong><a href="${url}">Keep Reading</a></strong>`,
      author: [author],
      contributor: [author],
    });
  });
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss.xml", feed.rss2());
  fs.writeFileSync("./public/rss.json", feed.json1());
};
