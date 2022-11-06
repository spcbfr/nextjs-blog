import Layout from "components/layout";
import { allPosts, type Post } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useMDXComponent } from "next-contentlayer/hooks";
import ProfilePic from "/public/me.webp";
import Image from "next/image";
import Date from "components/date";
import Link from "next/link";
import Img from "components/img";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export default function SinglePostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Layout>
      <Head>
        <title>{post.title + " | Youssef Bouzekri's Blog"}</title>
        <meta property="og:title" content={post.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={
            "https://youssefbouzekri.vercel.app/api/og?title=" + post.title
          }
        />
        <meta
          property="og:image:alt"
          content="Banner for site, showing page title in a playful way"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@spacebuffer" />
        <meta name="twitter:title" content="@spacebuffer" />
        <meta name="twitter:description" content={post.description} />
        <meta
          name="twitter:image"
          content={
            "https://youssefbouzekri.vercel.app/api/og?title=" + post.title
          }
        ></meta>
      </Head>
      <article className="sm:mt-32 mt-12 sm:mx-12 md:mx-0 ">
        <div className="print:mx-auto print:w-fit">
          <Link href="/">
            <a>
              <Image
                src={ProfilePic}
                width={70}
                height={70}
                alt="My profile Picture"
                className="rounded-full"
              />
            </a>
          </Link>
        </div>
        <h1 className=" sm:text-5xl mt-5 text-4xl font-black font-display dark:text-white text-black">
          {post.title}
        </h1>
        <div className="text-md text-zinc-700 dark:text-zinc-100 mt-2">
          Published on{" "}
          <span className="font-bold">
            <Date dateString={post.date} />
          </span>
        </div>
        <main className="mt-2 lg:prose-xl  prose-a:!decoration-indigo-500 prose-a:!decoration-2  sm:prose prose-ul:list-disc prose-sm marker:prose-ul:text-zinc-400 prose-headings:font-display prose-headings:!text-zinc-200 prose-indigo !prose-invert sm:max-w-none">
          <MDXContent components={{ Img }} />
          <p>
            if you&apos;ve enjoyed this article
            <a
              href="https://ko-fi.com/spacebuffer"
              className="!text-indigo-600 dark:!text-indigo-500 !no-underline ml-1"
            >
              consider buying me a coffee!
            </a>
          </p>
        </main>
      </article>
    </Layout>
  );
}
