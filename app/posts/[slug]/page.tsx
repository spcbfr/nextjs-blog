import MDX from "components/MDX";
import ScrollUp from "components/scrollup";
import { allPosts } from "contentlayer/generated";
import { generateRssFeed } from "lib/rss";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProfilePic from "../../../public/profile-pic.webp"
import Comments from "components/comments";
import { Balancer } from "react-wrap-balancer";


const dynamicParams = false;
export { dynamicParams };
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug
  }))
}
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug == params?.slug)
  return {
    title: post?.title,
    openGraph: {
      title: post?.title,
      description: post?.description,
      url: 'https://yusuf.fyi/posts/' + post?.slug,
      locale: 'en-US',
      authors: ['Yusuf Bouzekri'],
    },

    twitter: {
      card: 'summary_large_image',
      title: post?.title,
      description: post?.description,
      creator: "@spacebuffer",
      site: '@spacebuffer',
    }
  }

}
export type webmentionEntry = {
  type: "entry",
  url: string,
  published: string,
  author: {
    type: string,
    name: string,
    photo: string,
    url: string,
  },
  'wm-received': string,
  'wm-target': string,
  'wm-property': "in-reply-to" | "mention-of" | "like-of" | "repost-of"
  'wm-id': Number
  content: {
    text: string,
    html: string,
  },
  'wm-private': boolean
}
export type webmentionFeed = {
  type: "feed",
  name: "webmentions",
  children: webmentionEntry[ ]
}
export default async function Page({ params }: any) {
  const post = allPosts.find((post) => post.slug == params?.slug)
  if (!post) return notFound()
  const res = await fetch("https://webmention.io/api/mentions.jf2?target=https://www.yusuf.fyi/posts/" + post?.slug + "&sort-by=published", { next: { revalidate: 20 } })
  const jsonRes: webmentionFeed = await res.json()
  const sourceComments = jsonRes.children.filter((child: webmentionEntry) => child["wm-property"] == "in-reply-to" || child["wm-property"] == "mention-of")
  const sourceLikes = jsonRes.children.filter((child: webmentionEntry) => child["wm-property"] == "like-of" || child["wm-property"] == "repost-of")
  return (
    <>
      <div className="col-end-5">
        <div className="print:mx-auto print:w-fit relative bottom-[10px]">
          <Link href="/">
            <Image
              src={ProfilePic}
              width={80}
              height={80}
              quality="100"
              className="rounded-full"
              alt="My profile Picture"
            />
          </Link>
        </div>
          <h1 className="mt-5 font-display text-4xl font-black text-stone-800 sm:text-5xl ">
            <Balancer>
              {post.title}
            </Balancer>
          </h1>
      </div>

      {post.toc == true ? (
        post.headings.length !== 0 ? (
          <div className="sticky top-6 xl:!col-start-4 xl:row-span-6 xl:row-start-2 hidden space-y-2 font-sans xl:block">
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
            <ScrollUp />
          </div>
        ) : null
      ) : null}
      <MDX code={post.body.code}/>
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
      <div>
</div>
    <section className=" bg-zinc-100 p-2 rounded-md font-sans ">

      <h2 className="text-3xl font-display font-bold">Likes & Reposts</h2>
      <div className="inline-flex flex-row-reverse mt-4">
      {sourceLikes.map((like, i) => {
        if( like.author.photo){
        return (
          
            <span key={i} className="relative border-[3px] border-solid border-zinc-100 rounded-full [&:not(:last-child)]:-ml-7">
              <img src={like.author.photo} className="w-16 rounded-full" alt={`the profile picture of ${like.author.name}`}/>
            </span>
        )
      }})}</div>


      <div className="flex flex-col gap-4">
      <Comments source={sourceComments}/>
      </div>
    </section>
    </>
  )
}
