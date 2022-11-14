import Head from 'next/head'
import Image from 'next/image'
import CreateCourier from '../src/components/createCourier'
import CreateDelivery from '../src/components/createDelivery'
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
             src="/../public/img/logo.png"
             alt="favelog"
             layout="responsive"
             width="300"
             height="200"
          />
        </h1>
        <div className="backgorund"></div>
        <CreateRetail/>
        <CreateCourier/>
        <CreateDelivery/>
      </main>

      <footer className={styles.footer}>
        TEAM 42 OMEGA - 42SP.ORG.BR | 42.RIO
      </footer>
    </div>
  )
}
