import React, { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
export default function Layout({ children }: Props) {
  return (
    <>
      <main className="relative z-10 mb-5 mt-12 grid grid-cols-[1fr,min(640px,100%),1fr] xl:gap-x-3 gap-y-5  px-7 sm:mt-32 sm:px-0 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] [&>*]:col-start-2 xl:[&>*]:col-start-3 ">
        {children}
        <footer className="font-display text-center mt-2 [&>a]:text-amber-600  [&>a]:font-bold">
          Subscribe to <Link href="/rss.xml">RSS</Link> • Follow me on{" "}
          <a rel="me" href="https://fosstodon.org/@spacebuffer">
            Mastodon
          </a>
        </footer>
      </main>
    </>
  );
}
