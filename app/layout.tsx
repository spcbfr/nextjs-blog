import { Metadata } from "next";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Karla } from "next/font/google";
import Link from "next/link";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"]
});

export const metadata: Metadata = {
    metadataBase: new URL('https://yusuf.fyi'), // allows to use `/` later to reference this URL
    title: {
        default: 'a Thingy by Yusuf Bouzekri', 
        template: '%s | Yusuf Bouzekri'
    },
    creator: 'Yusuf Bouzekri',
    publisher: 'Yusuf Bouzekri',
    description: 'A personal blog about tech, life and movies',
    themeColor: '#FAFAF9', // bg-stone-50 from tailwindCSS
    category: 'Technology',
    alternates: {
      canonical: '/'
    },
    verification: {
      google: 'google'
    },
    generator: "Next.js"
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" className={karla.variable}>
        <body className="bg-stone-50 text-stone-900 antialiased selection:bg-yellow-400 selection:text-stone-900">
            <main className="relative z-10 mb-5 mt-12 sm:mx-2 md:mx-0 grid grid-cols-[1fr,min(640px,100%),1fr] xl:gap-x-10 gap-y-5  px-7 sm:mt-32 sm:px-0 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] [&>*]:col-start-2 xl:[&>*]:col-start-3">
              {children}
              <Analytics/>
              <footer className="font-display print:hidden text-center mt-2 [&>a]:text-green-600  [&>a]:font-bold">
                Subscribe to <Link href="/rss.xml">RSS</Link> • Follow me on{" "}
                <a rel="me" href="https://fosstodon.org/@spacebuffer">
                  Mastodon
                </a>
              </footer>
            </main>
        </body>
      </html>
    );
  }