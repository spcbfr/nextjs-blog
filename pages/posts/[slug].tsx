import Layout from "components/layout";
import { components } from "components/MDXBaseComponents";
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

      <div className="col-end-5">
        <div className="print:mx-auto print:w-fit">
          <Link href="/">
            <Image
              src={ProfilePic}
              width={80}
              height={80}
              alt=""
              className="rounded-full"
            />
          </Link>
        </div>
        <h1 className="mt-5 font-display text-4xl font-black text-zinc-100 sm:text-5xl ">
          {post.title}
        </h1>
      </div>

      {post.toc == true ? (
          <div className="sticky top-6 xl:!col-start-2 xl:row-span-2 xl:row-start-3 hidden space-y-2 font-display xl:block">
            <div className="text-sm uppercase text-zinc-500">On this page</div>
            {post.headings.map((heading: any) => {
              return (
                <div key={heading.slug}>
                  <a
                    href={`#${heading.slug}`}
                    data-level={heading.level}
                    className="underline-offset-3 text-zinc-400 decoration-zinc-500 transition-all hover:text-zinc-300 hover:underline data-[level=two]:pl-4 data-[level=three]:pl-8"
                  >
                    {heading.text}
                  </a>
                </div>
              );
            })}
          </div>
          ) : null}

      <MDXContent components={{ Img, ...components }} />
      <p className="font-sans text-lg ">
        if you&apos;ve enjoyed this article
        <a
          href="https://ko-fi.com/spacebuffer"
          className="ml-1 text-yellow-500 font-bold  !no-underline"
        >
          consider buying me a coffee!
        </a>
      </p>
    </Layout>
  );
}
