import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import { useMemo } from "react";
import Navbar from "../../components/navbar";
import { getMDXComponent } from "mdx-bundler/client";
import Layout from "../../components/layout";
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
        <meta
          property="og:title"
          content="Understanding useMemo and useCallback"
        />
        <meta
          property="og:description"
          content="What's the deal with these two hooks?! Lots of devs find them confusing, for a whole host of reasons. In this tutorial, we'll dig deep and understand what they do, why they're useful, and how to get the most out of them."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.joshwcomeau.com/images/og-usememo-and-usecallback.png"
        />
        <meta
          property="og:image:alt"
          content="Banner for site, showing page title in a playful way"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="675" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@joshwcomeau" />
        <meta
          name="twitter:title"
          content="Understanding useMemo and useCallback"
        />
        <meta
          name="twitter:description"
          content="What's the deal with these two hooks?! Lots of devs find them confusing, for a whole host of reasons. In this tutorial, we'll dig deep and understand what they do, why they're useful, and how to get the most out of them."
        />
        <meta
          name="twitter:image"
          content="https://www.joshwcomeau.com/images/og-usememo-and-usecallback.png"
        ></meta>
      </Head>
      <Navbar />
      <article className="mt-32 ">
        <h1 className=" text-5xl font-black text-bermuda">
          {frontmatter.title}
        </h1>
        <div className="text-md text-scott mt-2">
          Published on{" "}
          <span className="font-bold">
            <Date dateString={frontmatter.date} />
          </span>
        </div>
        <main className="mt-3 prose max-w-none prose-table:border  prose-th:px-3 prose-hr:border-scott prose-thead:bg-slate-500 prose-tr:border-b prose-tr:border-slate-700 prose-table:border-slate-600 prose-th:text-midnight prose-th:pt-1 prose-td:px-3 prose-custom ">
          <Component />
        </main>
      </article>
    </Layout>
  );
}
