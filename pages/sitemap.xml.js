//pages/sitemap.xml.js
import { allPosts } from "contentlayer/generated";
const EXTERNAL_DATA_URL = "https://youssefbouzekri.vercel.app/posts";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://youssefbouzekri.vercel.app</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${slug}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site

  // We generate the XML sitemap with the posts data
  const filteredPosts = allPosts.map(({ slug }) => {
    return { slug };
  });
  const sitemap = generateSiteMap(filteredPosts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
