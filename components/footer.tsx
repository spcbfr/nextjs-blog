"use client";
import { Rss, TwitterLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="font-display print:hidden text-center mt-2 flex [&>a]:text-green-700  [&>a]:font-bold">
      <section className="space-x-2 [&>a]:text-zinc-500 flex flex-row">
        <a href="https://yusuf.fyi/rss.xml" className="hover:text-zinc-950">
          <Rss size={32} />
        </a>
        <a
          href="https://twitter.com/spacebuffer"
          className="hover:text-zinc-950"
        >
          <TwitterLogo size={32} />
        </a>
      </section>
      <a href="https://github.com/spacebuffer" rel="me authn"></a>

    </footer>
  );
}
