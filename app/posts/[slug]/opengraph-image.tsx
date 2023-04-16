import { allPosts } from 'contentlayer/generated';
import { ImageResponse } from 'next/server';
export const alt = "Title of yusuf's post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/jpg';

export default function og({ params }: { params: { slug: string }}) {

    const post = allPosts.find((post) => post.slug == params.slug)
    return new ImageResponse(
      (
        <div tw="bg-stone-900 flex w-full  flex-col h-full justify-center items-center">
          <h2 style={{ fontSize: 35 }} tw="text-stone-400">
            an article by Yusuf Bouzekri
          </h2>

          <h1
            style={{ fontSize: 46, fontFamily: "Space Grotesk" }}
            tw="text-stone-100 text-center mx-2"
          >
            {post?.title}
          </h1>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
}