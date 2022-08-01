import { GetStaticProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import Image from 'next/image'

import styles from './home.module.scss'


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}
  export default function Home({product}:HomeProps) {
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
          <span>for {product.amount} month </span>
          </p>
           <SubscribeButton priceId={product.priceId} />

        </section>
        <Image src="/images/avatar.svg" alt="girl-coding" width={500} height={500} />
      </main>

    </>

  )
}


export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1L971pJmivFIWZUCZAkIQjLx', { //const para fazer um requisiçao
    expand: ['product']
  })

  // o valor que irá receber
  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 //24horas
  }
}
