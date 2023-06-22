"use client";
import { Rss, TwitterLogo } from "@phosphor-icons/react";
import Spotify from "./spotify-playing";

export default function Footer() {
  return (
    <footer className=" font-semibold print:hidden text-center mt-2 flex [&>a]:text-green-700  [&>a]:font-bold">
      <section className="gap-x-2 items-center flex flex-row">
        <a href="https://yusuf.fyi/rss.xml" className="transition text-zinc-600 hover:text-zinc-950">
          <Rss size={28} />
        </a>
        <a
          href="https://twitter.com/spacehiker_"
          className="transition text-zinc-600 hover:text-zinc-950"
        >
          <TwitterLogo size={28} />
        </a>
      <Spotify/>
      </section>
      <a href="https://github.com/spcbfr" rel="me authn"></a>

    </footer>
  );
}
