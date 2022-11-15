import { allPosts, type Post } from "contentlayer/generated";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "components/layout";
import Link from "next/link";
import Image from "next/image";
import profilePic from "/public/profile-pic.jpg";
import DisplayDate from "components/date";
import Head from "next/head";
import { generateRssFeed } from "lib/rss";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  generateRssFeed();
  const sortedPosts = allPosts.sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });
  return { props: { posts: sortedPosts } };
};

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>Youssef Bouzekri&apos;s Blog</title>
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
              Youssef Bouzekri
            </h2>
            <h5 className="text-zinc-700 sm:text-lg font-sans">
              Full Time Geek / CS Student
            </h5>
          </section>
        </section>
      </div>
      <ul>
        {posts.map((post) => (
          <li
            className="flex items-baseline justify-between pb-5 font-display"
            key={post.slug}
          >
            <Link
              href={`/posts/${post.slug}`}
              className="text-xl font-bold text-stone-800 sm:text-3xl"
            >
              {post.title}
            </Link>
            <div className=" font-sans  font-semibold text-stone-700">
              <DisplayDate dateString={post.date} />
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
