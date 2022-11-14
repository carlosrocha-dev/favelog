import Head from 'next/head'
import Image from 'next/image'
import CreateRetail from '../src/components/createRetail'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Favelog</title>
        <meta name="description" content="Aplicativo para Integração entre os microempreendedores da favela e moto-taxis, para serviços de entrega e variados" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Favelog
        </h1>

        <p className={styles.description}>
        Aplicativo para Integração entre os microempreendedores da favela e moto-taxis, para serviços de entrega e variados.
        </p>
        <CreateRetail/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
