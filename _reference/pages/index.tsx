import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { sanityConfig } from '@lib/sanityConfig'
import groq from 'groq'


interface Props {
  categories: {_id: string, title: string}[],
  bookmarks: {_id: string, title: string}[],
  [key: string]: any // bad practice!!!
}

const Home: NextPage<Props> = ({categories}) => {

  const newCategory = event => {
    event.preventDefault()
    console.log('new category')
  }
  
  return (
    <div>
      <Head>
        <title>js</title>
        <meta name="description" content="Stuff 'n Such" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-12">
        <form onSubmit={newCategory}>
          <div className="form-control">

            <label className="label">
              <span className="label-text"><h3>Category</h3></span>
            </label>

            <label className="input-group">
              <span>Name</span>
              <input id="category" type="text" placeholder="Category Name" className="input input-bordered" required />
            </label>

            <button type="submit" className="btn btn-wide">Submit</button>
            
          </div>
        </form>



        <hr/>

        <p>Category List:</p>
        {categories.length > 0 &&
          categories.map(
            ({ _id, title = "" }
            ) => <div key={_id}> {title} </div>)}

      </main>


    </div>
  )
}

export default Home


export async function getStaticProps() {
  const categories = await sanityConfig.fetch(groq`
    *[_type == "category"]
  `);
  console.log(categories)

  return {
    props: {
      categories,

    },
  };
}