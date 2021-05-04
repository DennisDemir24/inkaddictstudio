import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Hero from '../components/Hero'
import Main from '../components/Main'

export default function Home() {
  return (
    <>
      <div className={styles.overlay}>
        <Hero />
        <Main />
      </div>
    </>
  )
}
