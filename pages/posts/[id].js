import Layout from "../../components/layout"
import Head from "next/head"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Date from "../../components/date"
import utilStyles from "../../styles/utils.module.css"

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
                paths,
                fallback: false,
    }
}

export async function getStaticProps({params}) {
    
    const data = await getPostData(params.id)
    console.log(data)

    return {
        
        props: {data}
    }
}
export default function Post({data}) {
    return (
    <Layout>
      <Head>
        <title>{data.title + " | Youssef Bouzekri's Blog"}</title>
      </Head>
    <article>
        <h1 className={utilStyles.headingXl}>{data.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={data.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      </article>
    </Layout>
    )
}