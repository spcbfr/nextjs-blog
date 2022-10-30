import { Feed } from "feed";
import fs from "fs";

import { getPostDataForRSS } from "./posts";

export const generateRssFeed = async () => {
  const posts = getPostDataForRSS();

  const siteURL = process.env.SITE_URL;

  const date = new Date();

  const author = {
    name: "Youssef Bouzekri",

    email: "youssefbouzekri@proton.me",

    link: "https://fosstodon.org/web/@spacebuffer",
  };

  const feed = new Feed({
    title: "Youssef Bouzekri's Blog",

    description: "A Developer that blogs",

    id: siteURL,

    link: siteURL,

    copyright: `All rights reserved ${date.getFullYear()}, Youssef Bouzekri`,

    updated: date,

    generator: "Feed for Node.js",

    feedLinks: {
      rss2: `${siteURL}/rss.xml`,

      json: `${siteURL}/rss.json`,
    },

    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/posts/${post.slug}`;
    const initialPostDate = post.data.date;
    const [year, month, day] = initialPostDate.split("-");
    const properDay = parseInt(day) + 1;
    const finishedPostDate = month + " " + properDay + ", " + year;

    feed.addItem({
      title: `[CDATA[${post.data.title}]]`,
      id: url,
      link: url,
      date: new Date(finishedPostDate),
      description: `![CDATA[${post.data.excerpt}]]`,
      content: `<p>${post.data.excerpt}</p> <br/> <strong><a href="${url}">Keep Reading</a></strong>`,
      author: [author],
      contributor: [author],
    });
  });
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss.xml", feed.rss2());
  fs.writeFileSync("./public/rss.json", feed.json1());
};
