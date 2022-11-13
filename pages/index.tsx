import { allPosts, type Post } from "contentlayer/generated";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "components/layout";
import Link from "next/link";
import Image from "next/image";
import profilePic from "/public/me.webp";
import DisplayDate from "components/date";
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
      <div>
        <section className="flex items-center justify-between">
          <div className="flex">
            <Image
              src={profilePic}
              width="80"
              height={80}
              alt="A profile picture displaying a frog in a forest looking into the distance"
              className="rounded-full "
            />
            <section className="ml-6 mt-2">
              <h2 className="font-display text-2xl font-black text-zinc-200 sm:text-3xl">
                Youssef Bouzekri
              </h2>
              <h5 className="text-zinc-300 sm:text-lg font-sans">
                Developer | Content Creator
              </h5>
            </section>
          </div>
        </section>
        <section className="mt-3 mb-5  sm:text-xl">
          <p className="leading-relaxed"></p>
        </section>
      </div>
      <ul>
        {posts.map((post) => (
          <li
            className="flex justify-between pb-5 font-display"
            key={post.slug}
          >
            <Link
              href={`/posts/${post.slug}`}
              className="text-xl font-bold text-zinc-300  sm:text-3xl"
            >
              {post.title}
            </Link>
            <br />
            <p className=" font-sans font-semibold text-zinc-500">
              <DisplayDate dateString={post.date} />
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
