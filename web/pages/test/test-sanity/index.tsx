import styles from '@/styles/Test.module.css'
import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
      <h1>Stuff from the studio</h1>
      <sub>I see through the lies</sub>
      <p>Aliquid cumque voluptate a pariatur incidunt?</p>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <Link href='/'><a><h3>Test or test not.</h3></a></Link>
          <p>Est praesentium debitis deserunt voluptatum eligendi consectetur ducimus voluptatibus modi pariatur?</p>
        </div>
        {/* div map...here... */}

      </div>
    </div>
  )
}

export default Home

