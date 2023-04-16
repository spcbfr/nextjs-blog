import DisplayDate from "components/date"
import { allPosts } from "contentlayer/generated"
import { generateRssFeed } from "lib/rss"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import profilePic from "../public/profile-pic.webp"
export const metadata: Metadata = {
    title: "Yusuf's Home",
}

export default function Page(){
    generateRssFeed()
    const sortedPosts = allPosts.sort((a, b) => {
      return Number(new Date(b.date)) - Number(new Date(a.date));
    });
    const listedPosts = sortedPosts.filter((post) => !post.unlisted);
    const posts = listedPosts.map(({ slug, title, date }) => {
      return { slug, title, date };
    });
    return (
    <>
      <div>
        <section className="flex gap-x-4 ">
          <Image
            src={profilePic}
            width="80"
            height={80}
            quality="100"
            alt=""
            className="rounded-full"
          />
          <section>
            <h2 className="font-display text-2xl font-black text-stone-800 sm:text-3xl">
              Yusuf Bouzekri
            </h2>
            <p className="text-stone-700 sm:text-lg font-sans">
              Full Time Geek / CS Student
            </p>
          </section>
        </section>
      </div>
      <div className="flex flex-col gap-3 sm:gap-5">
        {posts.map((post) => (
          <div key={post.slug} className="font-sans">
            <div className="flex items-baseline justify-between font-display">
              <Link
                href={`/posts/${post.slug}`}
                className="text-xl font-semibold text-stone-600 ease-in-out hover:text-stone-800 transition-all sm:text-[1.7rem] sm:leading-8"
              >
                {post.title}
              </Link>
              <div className=" font-sans  font-semibold shrink-0  text-stone-500">
                <DisplayDate dateString={post.date} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}