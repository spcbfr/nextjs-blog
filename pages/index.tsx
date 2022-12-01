import { allPosts } from "contentlayer/generated";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "components/layout";
import Link from "next/link";
import Image from "next/image";
import profilePic from "/public/profile-pic.webp";
import DisplayDate from "components/date";
import Head from "next/head";
import { generateRssFeed } from "lib/rss";

type Post = {
  title: string;
  date: string;
  slug: string;
};
export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  generateRssFeed();
  const sortedPosts = allPosts.sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });
  const listedPosts = sortedPosts.filter((post) => !post.unlisted);
  const filteredPosts = listedPosts.map(({ slug, title, date }) => {
    return { slug, title, date };
  });
  return { props: { posts: filteredPosts } };
};

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>Yusuf Bouzekri&apos;s Blog</title>
        <meta
          name="description"
          content="Hey, I am Yusuf, A computer science student and an occaisonal tech writer of interactive articles on this blog!"
        />
      </Head>
      <div>
        <section className="flex gap-x-4 ">
          <Image
            src={profilePic}
            width="80"
            height={80}
            quality="100"
            alt=""
            className="rounded-full"
          />
          <section>
            <h2 className="font-display text-2xl font-black text-stone-800 sm:text-3xl">
              Yusuf Bouzekri
            </h2>
            <p className="text-zinc-700 sm:text-lg font-sans">
              Full Time Geek / CS Student
            </p>
          </section>
        </section>
      </div>
      <div>
        {posts.map((post) => (
          <div key={post.slug} className="pb-5 font-sans">
            <div className="flex items-baseline justify-between font-display">
              <Link
                href={`/posts/${post.slug}`}
                className="text-xl font-semibold text-stone-800 sm:text-[1.7rem] sm:leading-8"
              >
                {post.title}
              </Link>
              <div className=" font-sans  font-semibold shrink-0  text-stone-700">
                <DisplayDate dateString={post.date} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
