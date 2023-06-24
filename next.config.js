// @ts-check

/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/.well-known/host-meta/:slug*",
        destination: "https://fed.brid.gy/.well-known/host-meta/:slug*", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/.well-known/webfinger:slug*",
        destination: "https://fed.brid.gy/.well-known/webfinger:slug*", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value:
              '<https://webmention.io/username/webmention>; rel="webmention',
          },
        ],
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
