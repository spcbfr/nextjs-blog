import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-zinc-900 text-zinc-100 antialiased selection:bg-yellow-400 selection:text-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
