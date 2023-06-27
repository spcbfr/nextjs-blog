"use client";
import { Rss, TwitterLogo } from "@phosphor-icons/react";
import Spotify from "./SpotifyWidget";

export default function Footer() {
  return (
    <footer className="font-semibold print:hidden mt-2 flex">
      <section className="gap-x-2 items-center flex flex-row">
        <a
          href="https://yusuf.fyi/rss.xml"
          className="transition text-zinc-600 hover:text-zinc-950"
        >
          <Rss size={28} />
        </a>
        <a
          href="https://yusuf.fyi/twitter"
          className="transition text-zinc-600 hover:text-zinc-950"
        >
          <TwitterLogo size={28} />
        </a>
        <Spotify />
      </section>
      <a href="https://github.com/spcbfr" rel="me authn"></a>
    </footer>
  );
}
