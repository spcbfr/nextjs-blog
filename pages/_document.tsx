import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <body className="bg-stone-50 text-stone-900 antialiased selection:bg-yellow-400 selection:text-stone-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
