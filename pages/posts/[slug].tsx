import Layout from "components/layout";
import { components } from "components/MDXBaseComponents";
import { allPosts, type Post } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useMDXComponent } from "next-contentlayer/hooks";
import ProfilePic from "/public/profile-pic.webp";
import Image from "next/image";
import Callout, { CalloutDetails } from "components/callout";
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
    <>
      <Layout>
        <Head>
          <title>{post.title + " | Yusuf Bouzekri's Blog"}</title>
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
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
            integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
            crossOrigin="anonymous"
          ></link>
          <meta name="twitter:description" content={post.description} />
          <meta
            name="twitter:image"
            content={
              "https://youssefbouzekri.vercel.app/api/og?title=" + post.title
            }
          ></meta>
        </Head>
        <a id="top"></a>
        <div className="col-end-5">
          <div className="print:mx-auto print:w-fit">
            <Link href="/">
              <Image
                src={ProfilePic}
                width={80}
                height={80}
                quality="100"
                alt=""
                className="rounded-full"
              />
            </Link>
          </div>
          <h1 className="mt-5 font-display text-4xl font-black text-stone-800 sm:text-5xl ">
            {post.title}
          </h1>
        </div>

        {post.toc == true ? (
          post.headings.length !== 0 ? (
            <div className="sticky top-6 xl:!col-start-4 xl:row-span-4 xl:row-start-3 hidden space-y-2 font-sans xl:block">
              <div className="text-sm uppercase font-sans text-zinc-500">
                On this page
              </div>
              {post.headings.map((heading: any) => {
                return (
                  <div
                    key={heading.slug}
                    className="data-[level=two]:pl-4 data-[level=three]:pl-8"
                    data-level={heading.level}
                  >
                    <a
                      href={`#${heading.slug}`}
                      className="underline-offset-3 text-stone-800 decoration-stone-700 transition-all hover:text-stone-700 hover:underline "
                    >
                      {heading.text}
                    </a>
                  </div>
                );
              })}
              <hr className="pb-2" />
              <a
                className="text-stone-400 hover:text-stone-700 transition-colors text-sm"
                href="#top"
              >
                Back to top
              </a>
            </div>
          ) : null
        ) : null}

        <MDXContent
          components={{ Img, ...components, Callout, CalloutDetails }}
        />
        <p className="font-sans text-lg print:hidden bg-stone-900 text-stone-200 p-3 rounded-lg ">
          if you&apos;ve enjoyed this article,
          <a
            href="https://ko-fi.com/spacebuffer"
            className="ml-1 text-amber-500 font-bold  !no-underline"
          >
            consider buying me a coffee
          </a>
          , currently I am trying to collect $30 to buy a new SSD!
        </p>
      </Layout>
    </>
  );
}
