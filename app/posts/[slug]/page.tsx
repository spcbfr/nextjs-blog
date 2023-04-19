import MDX from "components/MDX";
import ScrollUp from "components/scrollup";
import { allPosts } from "contentlayer/generated";
import { generateRssFeed } from "lib/rss";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProfilePic from "../../../public/profile-pic.webp"

  
export const dynamicParams = false // Dynamic segments not included in generateStaticParams will return a 404
export async function generateStaticParams(){
    return allPosts.map((post) => ({
        slug: post.slug
    }))
}
export async function generateMetadata({params}: any): Promise<Metadata> {
    const post = allPosts.find((post) => post.slug == params?.slug) 
    return {
        title: post?.title,
        openGraph: {
            title: post?.title,
            description: post?.description,
            url: 'https://yusuf.fyi/posts/' + post?.slug,
            locale: 'en-US',
            authors: ['Yusuf Bouzekri'],
            images: [
              {
                url: 'https://yusuf.fyi/api/og?title='+ post?.title,
                alt: "The article's cover photo",
                height: 1200,
                width: 630,
              }
            ]
        },

        twitter: {
            card: 'summary_large_image',
            title: post?.title,
            description: post?.description,
            creator: "@spacebuffer",
            site: '@spacebuffer',
            images: [
              {
                url: 'https://yusuf.fyi/api/og?title='+ post?.title,
                alt: "The article's cover photo",
                height: 1200,
                width: 630,
              }
            ]
        }
    }

}

export default async function Page({params}: any){
    generateRssFeed() 
    const post = allPosts.find((post) => post.slug == params?.slug) 
    if (!post) return notFound()
    return (
       <>
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
            <div className="sticky top-6 xl:!col-start-4 xl:row-span-4 xl:row-start-2 hidden space-y-2 font-sans xl:block">
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
              <ScrollUp/>
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
    </> 
    )
}