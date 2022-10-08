import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Layout from "../../components/layout";
import Link from "next/link";
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { code, frontmatter } = await getPostData(params.id);
  return {
    props: { code, frontmatter },
  };
}
export default function Post({ code, frontmatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title + " | Youssef Bouzekri's Blog"}</title>
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://youssefbouzekri.vercel.app/me.png"
        />
        <meta
          property="og:image:alt"
          content="Banner for site, showing page title in a playful way"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="675" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@spacebuffer" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.description} />
        <meta
          name="twitter:image"
          content="https://youssefbouzekri.vercel.app/me.png"
        ></meta>
      </Head>
      <article className="mt-32 ">
        <div className="absolute top-[7.5rem] left-[28rem] ">
          <Link href="/">
            <a className="border-2 inline-block p-3 rounded-full shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                className="stroke-black"
              >
                <rect width="256" stroke="none" height="256" fill="none"></rect>
                <line
                  x1="216"
                  y1="128"
                  x2="40"
                  y2="128"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <polyline
                  points="112 56 40 128 112 200"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></polyline>
              </svg>
            </a>
          </Link>
        </div>
        <h1 className=" text-5xl font-black font-display text-black">
          {frontmatter.title}
        </h1>
        <div className="text-md text-zinc-700 mt-2">
          Published on{" "}
          <span className="font-bold">
            <Date dateString={frontmatter.date} />
          </span>
        </div>
        <main className="mt-3 prose max-w-none prose-indigo ">
          <Component />
        </main>
      </article>
    </Layout>
  );
}
