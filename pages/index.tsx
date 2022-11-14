import Head from 'next/head'
import Image from 'next/image'
import CreateCourier from '../src/components/createCourier'
import CreateRetail from '../src/components/createRetail'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Favelog - conectando a comunidade</title>
        <meta name="description" content="Aplicativo para Integração entre os microempreendedores da favela e moto-taxis, para serviços de entrega e variados" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          <Image
             src="img/logo.png"
             alt="favelog"
             layout="responsive"
          />
        </h1>
        <div className="backgorund"></div>
        <p className={styles.description}>
        Aplicativo para Integração entre os microempreendedores da favela e moto-taxis, para serviços de entrega e variados.
        </p>
        <CreateRetail/>
        <CreateCourier/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
