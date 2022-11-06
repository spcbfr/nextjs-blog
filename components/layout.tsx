import React, { ReactNode } from "react";
import Footer from "./footer";
interface Props {
  children?: ReactNode;
  // any props that come into the component
}
export default function Layout({ children }: Props) {
  return (
    <>
      {/* 
      <svg
        className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="pedroduarteisalegend">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.90"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#pedroduarteisalegend)"
        ></rect>
      </svg>

      */}
      <main className=" bg-zinc-900 px-7 selection:bg-indigo-800 text-zinc-100 selection:text-zinc-50 flex flex-col sm:px-0  min-h-screen ">
        <section className="md:max-w-3xl sm:max-w-2xl sm:mx-auto flex-grow w-full">
          {children}
        </section>
        <Footer />
      </main>
    </>
  );
}
