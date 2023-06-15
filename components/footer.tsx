"use client";
import { Rss, TwitterLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="font-display print:hidden text-center mt-2 font-sans flex [&>a]:text-green-700  [&>a]:font-bold">
      <section className="flex gap-x-2 items-center flex flex-row">
        <a href="https://yusuf.fyi/rss.xml" className="transition text-zinc-600 hover:text-zinc-950">
          <Rss size={28} />
        </a>
        <a
          href="https://twitter.com/spacehiker_"
          className="transition text-zinc-600 hover:text-zinc-950"
        >
          <TwitterLogo size={28} />
        </a>
        <div className="p-1 text-zinc-900">thanks for reading!</div>
      </section>
      <a href="https://github.com/spcbfr" rel="me authn"></a>

    </footer>
  );
}
