import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
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
      <article>
        <h1 className="font-display text-2xl">{frontmatter.title}</h1>
        <div className="text-md text-slate-600">
          <Date dateString={frontmatter.date} />
        </div>
        <main className="mt-3">
          <Component />
        </main>
      </article>
    </Layout>
  );
}
