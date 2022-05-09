import Head from 'next/head'
import { SubscribeButton } from '../src/components/SubscribeButton'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
     <Head>
        <title>Next | Início</title>
      </Head>
    
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, welcome!!</span>
          <h1>News about the <span>React</span>word.</h1>
          <p>Get acess to all the publications <br/>
          <span>for 9.90 month </span>
          </p>
           <SubscribeButton />

        </section>
        <img src="/images/avatar.svg" alt="girl coding" />
      </main>

    </>

  )
}
