import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { sanityConfig } from '@lib/sanityConfig'
import { categoryQuery, bookmarkQuery } from '@lib/sanityQueries'

interface Props {
  categories: {_id: string, title: string}[],
  bookmarks: {_id: string, title: string}[],
  // [key: string]: any // bad practice!!!
}

const Home: NextPage<Props> = ({categories, bookmarks}) => {
  
  return (
    <div>
      <Head>
        <title>js</title>
        <meta name="description" content="Stuff 'n Such" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>beep boop:</p>
        {categories.length > 0 &&
          categories.map(({ _id, title = "" }) => <div key={_id}>{title}</div>)}
        <hr />
        {bookmarks.length > 0 &&
          bookmarks.map(({ _id, title = "" }) => <div key={_id}>{title}</div>)}
        
      </main>


    </div>
  )
}

export default Home

export async function getStaticProps() {
  const categories = categoryQuery
  const bookmarks = bookmarkQuery

  return {
    props: {
      categories,
      bookmarks,
    },
  };
}