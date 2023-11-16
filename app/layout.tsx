import { Metadata } from "next";
import "../styles/globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import Footer from "components/footer";
import { Nabla } from "next/font/google";

const karla = localFont({
  src: [
    {
      path: "../public/fonts/Karla-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Karla-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-karla",
});
const sentient = localFont({
  src: [
    {
      path: "../public/fonts/Sentient-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Sentient-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },

    {
      path: "../public/fonts/Sentient-Medium.woff2",
      weight: "600",
      style: "normal",
    },

    {
      path: "../public/fonts/Sentient-MediumItalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-sentient",
});
const komet = localFont({
  src: [
    {
      path: "../public/fonts/KometPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/KometPro-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/KometPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/KometPro-BoldItalic.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-komet",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yusuf.fyi"), // allows to use `/` later to reference this URL
  title: {
    template: "%s | Yusuf Bouzekri",
    default: "a Thingy by Yusuf Bouzekri",
  },
  creator: "Yusuf Bouzekri",
  publisher: "Bouzekri inc.",
  description: "A personal blog about tech, life and movies",
  themeColor: "#FAFAF9", // bg-stone-50 from tailwindCSS
  category: "Technology",
  keywords: [
    "Next.js",
    "Programming",
    "Web development",
    "Productivity",
    "Movies",
    "TV Shows",
  ],
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  verification: {
    google: "google",
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${karla.variable} ${sentient.variable} ${komet.variable}`}
    >
      <body className="  font-sans text-stone-900 antialiased selection:bg-yellow-400 selection:text-stone-900">
        <main className="relative z-10 mb-5 mt-12 sm:mx-2 md:mx-0 grid grid-cols-[1fr,min(640px,100%),1fr] xl:gap-x-10 gap-y-5  px-7 sm:mt-12 sm:px-0 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] [&>*]:col-start-2 xl:[&>*]:col-start-3">
          {children}
          <Footer />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
