
import Head from 'next/head';
import Link from "next/link"
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from "../components/date"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I am a computer science <strike>student</strike> nerd from 🇹🇳 Tunisia, I love doing stuff on a computer! I write about productivity, programming and all kinds of other stuff. you can find me on <a href="https://twitter.com/spacebuffer">Twitter</a>, for the moment you can read one of my posts!</p>

      </section>
            {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>

          ))}
        </ul>
      </section>
    </Layout>
  );
}