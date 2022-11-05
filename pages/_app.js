import "../styles/global.css";
import "../styles/fonts.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
