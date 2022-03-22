import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>julesjazz</title>
        <meta name="description" content="Stuff 'n Such" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="./test" passHref>Formatting Test Page</Link>
        <hr/>
        <h1>Beep Boop</h1>
        <p>Placeat iure ab quo, magni dolores harum nihil voluptates itaque quasi facilis nulla facere officia similique exercitationem, ipsum ut culpa. Aperiam, praesentium.</p>
      </main>


    </div>
  )
}

export default Home
