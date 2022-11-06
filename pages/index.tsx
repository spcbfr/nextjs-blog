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
      <div className="mt-28">
        <section className="flex items-center justify-between mt-10">
          <div className="flex">
            <Image
              src={profilePic}
              width="80"
              height={80}
              alt="A profile picture displaying a frog in a forest looking into the distance"
              className="rounded-full "
            />
            <section className="ml-6 mt-2">
              <h2 className="sm:text-3xl text-2xl font-black text-zinc-200 font-display">
                Youssef Bouzekri
              </h2>
              <h5 className="sm:text-lg text-zinc-300">
                Developer | Content Creator
              </h5>
            </section>
          </div>
        </section>
        <section className="sm:text-xl mt-3  mb-5">
          <p className="leading-relaxed"></p>
        </section>
      </div>
      <ul>
        {posts.map((post) => (
          <li
            className="pb-5 font-display flex justify-between"
            key={post.slug}
          >
            <Link href={`/posts/${post.slug}`}>
              <a className="sm:text-3xl text-xl text-zinc-300  font-bold">
                {post.title}
              </a>
            </Link>
            <br />
            <p className=" text-zinc-500 font-semibold font-sans">
              <DisplayDate dateString={post.date} />
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
