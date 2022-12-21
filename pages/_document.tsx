import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
          crossOrigin="anonymous"
        ></link>
        <link rel="me authn" href="https://github.com/spcbfr" />
        <link rel="webmention" href="https://webmention.io/yusuf.fyi/webmention" />
        <link rel="pingback" href="https://webmention.io/yusuf.fyi/xmlrpc" />
      </Head>
      <body className="bg-stone-50 text-stone-900 antialiased selection:bg-yellow-400 selection:text-stone-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
