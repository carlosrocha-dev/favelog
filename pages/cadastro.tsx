import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Signin() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Favelog</title>
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
        <input required />
        <button>Cadastrar</button>
      </main>
    </div>
  )
}
