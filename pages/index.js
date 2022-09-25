import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import NameCard from "../components/nameCard";
import PostCard from "../components/postCard";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const siteTitle = "Youssef's Blog";
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NameCard />
      <section className="text-4xl leading-relaxed my-10 mb-5">
        Welcome to my{" "}
        <span className="font-blaka text-miami">Digital Garden</span> I love
        using computers, and I am sharing my love through this blog.
      </section>
      <section className="mb-10 gap-x-3 flex">
        {/* 
          <Link href="/posts">
            <a className="px-5 py-3 font-medium bg-miami text-midnnight rounded-md ease-in hover:scale-110 transition ">
              Reach out
            </a>
          </Link>
          */}

        <a
          className="px-5 py-3 font-medium border-miami border-2 text-miami rounded-md  ease-in hover:scale-110 transition"
          href="https://twitter.com/spacebuffer"
          target={"_blank"}
        >
          Twitter
        </a>
      </section>
      <h2 className="text-xl mt-3 mb-3 font-bold tracking-[0.2em] text-bermuda uppercase">
        Recently Published
      </h2>
      <ul>
        <PostCard postsData={allPostsData} />
      </ul>
    </Layout>
  );
}
