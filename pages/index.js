import Head from "next/head";
import groq from "groq";
import { sClient } from "../lib/sanity/sClient";

export default function Home({ categories, bookmarks }) {
  return (
    <div>
      <Head>
        <title>Beep Boop</title>
        <meta name="description" content="Beep Boop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-10">
        <h1> Beep Boop.</h1>
        <hr/>
        <h2>Input</h2>

        <br /><hr/>
        <h2>List Categories</h2>
        
        {categories.length > 0 &&
          categories.map(({ _id, title = "" }) => <div key={_id}>{title}</div>)}

        <br /><hr/>
        <h2>List Bookmarks</h2>
        
        {bookmarks.length > 0 &&
          bookmarks.map(({ _id, title = "" }) => <div key={_id}>{title}</div>)}

      </main>
    </div>
  );
}

export async function getStaticProps() {
  const categories = await sClient.fetch(groq`
    *[_type == "category"]
  `);
  const bookmarks = await sClient.fetch(groq`
    *[_type == "bookmark"]
  `);

  return {
    props: {
      categories,
      bookmarks,
    },
  };
}
