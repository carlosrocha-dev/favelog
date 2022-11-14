import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Signin() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Favelog - conectando o micro empreendedor da favela com a comunidade</title>
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
      </main>

      <footer className={styles.footer}>
        TEAM 42 OMEGA - 42SP.ORG.BR | 42.RIO
      </footer>
    </div>
  )
}
