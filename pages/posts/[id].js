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
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:url" content="https://youssefbouzekri.vercel.app" />
        <meta property="og:description" content={frontmatter.description} />
        <meta
          property="og:image"
          content="https://youssefbouzekri.vercel.app/me.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nytimes" />
        <meta name="twitter:creator" content="@SarahMaslinNir" />
        <meta
          name="twitter:title"
          content="Parade of Fans for Houston’s Funeral"
        />
        <meta
          name="twitter:description"
          content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here."
        />
        <meta
          name="twitter:image"
          content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"
        />
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
