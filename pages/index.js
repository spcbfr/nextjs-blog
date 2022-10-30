import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import NameCard from "../components/nameCard";
import PostCard from "../components/postCard";
import Navbar from "../components/navbar";
import { generateRssFeed } from "../lib/rss";

export async function getStaticProps() {
  await generateRssFeed();
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const siteTitle = "Youssef's Blog";
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className="mt-28">
          <NameCard />
          <section className="sm:text-xl mt-3  mb-5">
            <p className="leading-relaxed">
              Welcome to my Digital Garden, I love using computers, and I am
              sharing my love through this blog. Other than computers, I watch
              quite a few movies and series, and will review some of them on
              here
            </p>
          </section>
        </div>
        <section className="flex gap-5 mb-10">
          <a href="https://twitter.com/spacebuffer" target={"_blank"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              className="stroke-zinc-700 transition ease-linear fill-zinc-700 hover:stroke-black hover:fill-black"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" stroke="none" fill="none"></rect>
              <path
                d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z"
                opacity="0.2"
              ></path>
              <path
                d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
            </svg>
          </a>
          <a href="https://github.com/spcbfr" target={"_blank"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              height="36"
              width="36"
              className="stroke-zinc-700 transition ease-linear fill-zinc-700 hover:stroke-black hover:fill-black"
            >
              <rect width="256" height="256" stroke="none" fill="none"></rect>
              <path
                d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                opacity="0.2"
              ></path>
              <path
                d="M84,240a23.9,23.9,0,0,0,24-24V168"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
              <path
                d="M172,240a23.9,23.9,0,0,1-24-24V168"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
              <path
                d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
              <path
                d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
              <path
                d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
            </svg>
          </a>
          <a href="https://instagram.com/spacebuffer" target={"_blank"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              className="stroke-zinc-700 transition ease-linear fill-zinc-700 hover:stroke-black hover:fill-black"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" stroke="none" fill="none"></rect>
              <path
                d="M172,36H84A48,48,0,0,0,36,84v88a48,48,0,0,0,48,48h88a48,48,0,0,0,48-48V84A48,48,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                opacity="0.2"
              ></path>
              <circle
                cx="128"
                cy="128"
                r="40"
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="16"
              ></circle>
              <rect
                x="36"
                y="36"
                width="184"
                height="184"
                rx="48"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></rect>
              <circle cx="180" cy="76" r="12"></circle>
            </svg>
          </a>
        </section>

        <ul>
          <PostCard postsData={allPostsData} />
        </ul>
      </Layout>
    </>
  );
}
