import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

const font = fetch(
  new URL("../../public/fonts/SpaceGrotesk-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
export default async function handler(req: any) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const fontData = await font;
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    return new ImageResponse(
      (
        <div tw="bg-stone-900 flex w-full  flex-col h-full justify-center items-center">
          <h2 style={{ fontSize: 35 }} tw="text-stone-400">
            a Blog Post by Youssef Bouzekri
          </h2>

          <h1
            style={{ fontSize: 46, fontFamily: "Space Grotesk" }}
            tw="text-stone-100 "
          >
            {title}
          </h1>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Space Grotesk",
            data: fontData,
            style: "normal",
            weight: 800,
          },
        ],
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
