import { allPosts } from "contentlayer/generated";
import { ImageResponse } from "next/server";

export const runtime = 'edge'
export const alt = 'An article on the website yusuf.fyi'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630
}

const sentientBold = fetch(
  new URL('./Sentient-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function Image({params}) {
    const post = allPosts.find((post) => post.slug == params?.slug)
    return new ImageResponse(
      (
        <div tw="bg-stone-900 flex w-full flex-col h-full justify-center items-center">
          <h2 style={{ fontSize: 35 }} tw="text-stone-400">
            Yusuf Productions Presents
          </h2>

          <h1
            style={{ fontSize: 46 }}
            tw="text-stone-100 text-center mx-2"
          >
            {post ? post.title : "My default title"}
          </h1>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: "Sentient",
            data: await sentientBold,
            style: "normal",
            weight: 800,
          },
        ],
      }
    )
}
