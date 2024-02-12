// MDX
import { allPosts } from "contentlayer/generated";
import MDX from "components/MDX";
// NextJS
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
// Components
import Comments from "components/comments";
import { Balancer } from "react-wrap-balancer";
import Likes from "components/likes";
import DonationCard from "components/donationCard";
import TableOfContents from "components/toc";
// Types
import { webmentionEntry, webmentionFeed } from "./webmention-types";

const dynamicParams = false;
const revalidate = 60;
export { dynamicParams, revalidate };

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug == params?.slug);
  return {
    title: post?.title,
    openGraph: {
      title: post?.title,
      description: post?.description || "An article by Yusuf",
      url: "https://yusuf.fyi/posts/" + post?.slug,
      locale: "en-US",
      authors: ["Yusuf Bouzekri"],
    },

    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description: post?.description || "An article by Yusuf",
      creator: "@spacebuffer",
      site: "@spacebuffer",
    },
  };
}
export default async function Page({ params }: any) {
  const post = allPosts.find((post) => post.slug == params?.slug);
  if (!post) return notFound();
  const res = await fetch(
    "https://webmention.io/api/mentions.jf2?target=https://www.yusuf.fyi/posts/" +
      post?.slug +
      "&sort-by=published"
  );

  const nonWwwRes = await fetch(
    "https://webmention.io/api/mentions.jf2?target=https://yusuf.fyi/posts/" +
      post?.slug +
      "&sort-by=published"
  );
  const jsonNonWwwRes: webmentionFeed = await nonWwwRes.json();
  let jsonRes: webmentionFeed = await res.json();
  jsonRes = Object.assign({}, jsonRes, jsonNonWwwRes);
  const sourceComments = jsonRes.children.filter(
    (child: webmentionEntry) =>
      child["wm-property"] == "in-reply-to" ||
      child["wm-property"] == "mention-of"
  );
  const sourceLikes = jsonRes.children.filter(
    (child: webmentionEntry) =>
      child["wm-property"] == "like-of" || child["wm-property"] == "repost-of"
  );
  const activity = sourceLikes.length > 0 || sourceComments.length > 0;
  return (
    <>
      <div className="print:mx-auto print:w-fit place-self-start relative bottom-[10px]">
        <Link href="/">
          <Image
            src="/profile-pic.webp"
            width={80}
            height={80}
            quality="100"
            className="rounded-full"
            alt="My profile Picture"
          />
        </Link>
      </div>
      <div className="col-end-5">
        <h1 className="mt-5 font-display text-4xl font-black text-stone-800 sm:text-5xl ">
          <Balancer>{post.title}</Balancer>
        </h1>
      </div>
      {post.toc == true && post.headings.length !== 0 ? (
        <TableOfContents headings={post.headings} />
      ) : null}
      <MDX code={post.body.code} />
      <DonationCard />
      {activity ? (
        <section className=" bg-zinc-100 p-2 rounded-md font-sans print:hidden ">
          <Likes source={sourceLikes} />
          <Comments source={sourceComments} />
        </section>
      ) : null}
    </>
  );
}
