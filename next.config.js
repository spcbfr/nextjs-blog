// next.config.js
module.exports = {
  rewrites: async () => [
    {
      source: "/rss.xml",
      destination: "/api/rss",
    },
  ],
};
