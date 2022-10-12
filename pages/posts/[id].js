import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import ProfilePic from "/public/me.png";
import Date from "../../components/date";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const {
    code,
    frontmatter,
    prevPostData,
    nextPostData,
    prevPostIndex,
    nextPostIndex,
  } = await getPostData(params.id);
  return {
    props: {
      code,
      frontmatter,
      prevPostData,
      nextPostData,
    },
  };
}
export default function Post({
  code,
  frontmatter,
  prevPostData,
  nextPostData,
}) {
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
      <article className="sm:mt-32 mt-12 ">
        <div className="print:mx-auto print:w-fit">
          <Link href="/">
            <a>
              <Image
                src={ProfilePic}
                width={70}
                height={70}
                className="rounded-full"
              />
            </a>
          </Link>
        </div>
        <h1 className=" sm:text-5xl mt-5 text-4xl font-black font-display text-black">
          {frontmatter.title}
        </h1>
        <div className="text-md text-zinc-700 mt-2">
          Published on{" "}
          <span className="font-bold">
            <Date dateString={frontmatter.date} />
          </span>
        </div>
        <main className="mt-3 lg:prose-xl prose-hr:print:hidden prose-a:underline prose-a:!decoration-indigo-500 prose-a:!decoration-2  sm:prose prose-ul:list-disc prose-sm marker:prose-ul:text-zinc-400 prose-indigo sm:max-w-none">
          <Component />
        </main>
      </article>
      <h2 className="text-2xl font-bold mx-auto w-fit mb-4 text-zinc-600">
        Read More
      </h2>
      <div className="flex gap-4 justify-center">
        {prevPostData ? (
          <Link href={prevPostData.id}>
            <a className="bg-zinc-100 gap-2 hover:bg-[#EAEAEC] transition flex-col items-baseline flex p-3 rounded-lg  text-zinc-700">
              <div className="font-semibold uppercase text-zinc-500 text-sm">
                Previous Post
              </div>
              <div>
                <h2>
                  {prevPostData.title.length <= 40
                    ? prevPostData.title
                    : prevPostData.title.substring(0, 40) + "..."}
                </h2>
              </div>
            </a>
          </Link>
        ) : null}
        {nextPostData ? (
          <Link href={nextPostData.id}>
            <a className="bg-zinc-100 gap-2 hover:bg-[#EAEAEC] transition flex-col items-baseline flex p-3 rounded-lg text-zinc-700">
              <div className="font-semibold uppercase text-sm text-zinc-500">
                Next Post
              </div>
              <h2>
                {nextPostData.title.length <= 40
                  ? nextPostData.title
                  : nextPostData.title.substring(0, 40) + "..."}
              </h2>
            </a>
          </Link>
        ) : null}
      </div>
    </Layout>
  );
}
