/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <main>
      <h1>H1ello World 🔥</h1>
      <h2>H2ello World 🔥</h2>
      <h3>H3ello World 🔥</h3>
      <h4>H4ello World 🔥</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sint obcaecati dolorum magni, voluptates molestiae eligendi nam voluptas, officiis temporibus facere enim itaque laborum molestias deserunt cupiditate hic! Cupiditate, aperiam.
      </p>
      <p> ... <em>emphasis</em> ... <strong>strong 💪</strong> ... </p>
      <p>
        here is a link: <a href="https://sanity.io">Sanity.io</a>
      </p>
      <ol>
        <li>ol item</li>
        <li>ol item</li>
        <li>ol item</li>
        <li>ol item</li>
        <li>ol item</li>
      </ol>
      <br/><hr/><br/>
      <ul>
        <li>ul item</li>
        <li>ul item</li>
        <li>ul item</li>
        <li>ul item</li>
        <li>ul item</li>
      </ul>
    </main>
  )
}

export default Home
