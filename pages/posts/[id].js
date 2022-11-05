import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import ProfilePic from "/public/me.webp";
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
  const { code, frontmatter, prevPostData, nextPostData } = await getPostData(
    params.id
  );
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:description" content={frontmatter.excerpt} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={
            "https://youssefbouzekri.vercel.app/api/og?title=" +
            frontmatter.title
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
        <meta name="twitter:description" content={frontmatter.excerpt} />
        <meta
          name="twitter:image"
          content={
            "https://youssefbouzekri.vercel.app/api/og?title=" +
            frontmatter.title
          }
        ></meta>
      </Head>
      <article className="sm:mt-32 mt-12 sm:mx-12 md:mx-0 ">
        <div className="print:mx-auto print:w-fit">
          <Link href="/">
            <Image
              src={ProfilePic}
              width={70}
              height={70}
              className="rounded-full"
            />
          </Link>
        </div>
        <h1 className=" sm:text-5xl mt-5 text-4xl font-black font-display dark:text-white text-black">
          {frontmatter.title}
        </h1>
        <div className="text-md text-zinc-700 dark:text-zinc-100 mt-2">
          Published on{" "}
          <span className="font-bold">
            <Date dateString={frontmatter.date} />
          </span>
        </div>
        <main className="mt-3 [&>p]:!mb-5 [&>ul>li]:list-disc [&>hr]:!my-9 [&>p>a]:underline [&>ul>li>a]:underline  [&>h2]:text-4xl [&>ol>li]:list-decimal m-1 lg:prose-xl prose-hr:print:hidden prose-figure:rounded-xl prose-figure:overflow-hidden prose-figcaption:bg-zinc-800 prose-figcaption:!text-zinc-200 prose-figcaption:!text-sm prose-figcaption:!p-2 [&>figure>figcaption>p]:!m-0 prose-figcaption:!mt-0 prose-a:underline prose-a:!decoration-indigo-500 prose-a:!decoration-2  sm:prose prose-ul:list-disc prose-sm marker:prose-ul:text-zinc-400 prose-headings:font-display prose-indigo dark:prose-invert sm:max-w-none">
          <Component />
          <p>
            if you've enjoyed this article
            <a
              href="https://ko-fi.com/spacebuffer"
              className="!text-indigo-600 dark:!text-indigo-500 !no-underline ml-1"
            >
              consider buying me a coffee!
            </a>
          </p>
        </main>
      </article>
      <div className="flex gap-4 justify-center">
        {prevPostData ? (
          <Link
            href={prevPostData.id}
            className="bg-zinc-100 gap-2 hover:bg-[#EAEAEC] dark:bg-zinc-800 dark:text-zinc-200 transition flex-col items-baseline flex p-3 rounded-lg ease-linear  text-zinc-700"
          >
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
          </Link>
        ) : null}
        {nextPostData ? (
          <Link
            href={nextPostData.id}
            className="bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200 gap-2 hover:bg-[#EAEAEC] transition flex-col items-baseline flex p-3 rounded-lg ease-linear text-zinc-700"
          >
            <div className="font-semibold uppercase text-sm text-zinc-500">
              Next Post
            </div>
            <h2>
              {nextPostData.title.length <= 40
                ? nextPostData.title
                : nextPostData.title.substring(0, 40) + "..."}
            </h2>
          </Link>
        ) : null}
      </div>
    </Layout>
  );
}
