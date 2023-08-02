import { allPosts } from "contentlayer/generated";
import { ImageResponse } from "next/server";
export const runtime = "edge";
export const alt = "An article on the website yusuf.fyi";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug == params?.slug);
  const fontData = await fetch(
    new URL("app/posts/[slug]/Sentient-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div tw="bg-[#042f2e] text-teal-200 px-40 flex w-full flex-col h-full justify-center items-center">
        <div tw="text-xl rounded-lg">Written by yusuf</div>
        <h1 style={{ fontSize: 46 }} tw=" text-center text-teal-100 mx-2">
          {post ? post.title : "A nameless article"}
        </h1>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Sentient",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
