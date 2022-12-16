import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

import { Karla } from "@next/font/google";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"]
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={karla.variable}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
