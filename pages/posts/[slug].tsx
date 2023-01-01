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


type Replies = {
  type: string;
  name: string;
  children: {
    'wm-id': number;
    'wm-private': boolean;
    'wm-source': string;
    'wm-target': string;
    author: {
      name: string;
      photo: string;
      url: string;
    }
    'wm-property': "in-reply-to" | "like-of" | "repost-of" | "mention-of" | "bookmark-of" | "rsvp"
    type: string;
    url: string;
    content: {
      html: string
      text: string
    }
  }[]
}

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<{
  post: Post;
  replies: Replies;
}> = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  const res = await fetch("https://webmention.io/api/mentions.jf2?target=https://www.yusuf.fyi/posts/" + post?.slug + "&sort-by=published")
  const replies = await res.json()

  if (!post) {
    return { notFound: true };
  }

  return {
     props: { post, replies },
     revalidate: 10
  };
};

export default function SinglePostPage({
  post, replies
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Layout>
        <Head>
          <title>{post.title + " | Yusuf Bouzekri's Blog"}</title>
          <meta property="og:title" content={post.title} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href={"https://www.yusuf.fyi/posts/" + post.slug} />
          <meta property="og:description" content={post.description} />
          <meta property="og:type" content="article" />
          <meta
            property="og:image"
            content={"https://yusuf.fyi/api/og?title=" + post.title}
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
            content={"https://yusuf.fyi/api/og?title=" + post.title}
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
              <div className="text-sm uppercase font-sans text-stone-500">
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
              <hr className="pb-2 w-7" />
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
            className="ml-1 text-emerald-500 font-bold  !no-underline"
          >
            consider buying me a coffee
          </a>
          , it supports this site and caffeinates me so that I can keep producing awesome content!
        </p>
        <section className=" bg-zinc-100 p-3 rounded-md font-sans flex flex-col gap-4">
        <h2 className="text-3xl font-display font-bold">Replies</h2>
          { replies.children.length ? replies.children.map((reply, index: number) => {
            if (reply["wm-property"] === "in-reply-to" || reply["wm-property"] === "mention-of") {
              console.log(reply)
            return (

            <div key={index}>
              <div className="flex items-start gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img src={reply.author.photo} alt={reply.author.name} className="w-10 rounded-full"/>
                <div>
                  <a className="font-bold text-lg" href={reply.url}>{reply.author.name}</a>
                  {(reply.content ? <div className="[&>ol]:list-decimal [&>ul]:list-disc [&>ul]:list-inside" dangerouslySetInnerHTML={{__html: reply.content.html}} /> : null)}
                </div>
              </div>
            </div>
            )}}): <div>There are no replies to be found!</div>
          }
        </section>
      </Layout>
    </>
  );
}
