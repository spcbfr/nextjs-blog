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
      rss2: `${siteURL}/rss/feed.xml`,

      json: `${siteURL}/rss/feed.json`,
    },

    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.slug}`;
    const initialPostDate = post.data.date;
    const [year, month, day] = initialPostDate.split("-");
    const properDay = parseInt(day) + 1;
    const finishedPostDate = month + " " + properDay + ", " + year;

    feed.addItem({
      title: post.data.title,

      id: url,

      link: url,
      date: new Date(finishedPostDate),

      description:
        "Read the full post on my website (youssefbouzekri.vercel.app)" +
        post.content.slice(0, 400) +
        "..",

      author: [author],

      contributor: [author],
    });
  });
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};
