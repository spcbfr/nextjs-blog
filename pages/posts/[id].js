import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import { useMemo } from "react";
import Navbar from "../../components/navbar";
import { getMDXComponent } from "mdx-bundler/client";
import Link from "next/link";
import Footer from "../../components/footer";
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
      </Head>
      <article className="mt-32 ">
        <h1 className=" text-3xl font-black text-sunrise">
          {frontmatter.title}
        </h1>
        <div className="text-md text-scott mt-2">
          Published on{" "}
          <span className="font-bold">
            <Date dateString={frontmatter.date} />
          </span>
        </div>
        <main className="mt-3 prose prose-custom ">
          <Component />
        </main>
      </article>
    </Layout>
  );
}
