import Head from 'next/head'
import Image from 'next/image'
import CreateRetail from '../src/components/createRetail'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Favelog</title>
        <meta name="description" content="Favelog | Entrega na Favela" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CreateRetail/>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
