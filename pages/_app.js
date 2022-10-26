import "../styles/global.css";
import "../styles/fonts.css";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}
