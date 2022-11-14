import Head from 'next/head'
import Login from '../src/components/login'
import Logo from '../src/components/logo'
import styles from '../styles/Home.module.css'
import styles1 from '../styles/Favelog.module.css'
import { useState } from 'react'
import CreateRetail from '../src/components/createRetail'
import CreateCourier from '../src/components/createCourier'
import { CreateType } from '../src/components/createType'

export default function Home() {

  const [isLogginButton, setIsLogginButton] = useState(true)
  const [isSubsButton, setIsSubsButton] = useState(true)

  function handleSubs() {
    setIsSubsButton(false)
  }

  function handleLogin() {
    setIsLogginButton(false)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Favelog - conectando o micro empreendedor da favela com a comunidade</title>
        <meta name="description" content="Aplicativo para Integração entre os microempreendedores da favela e moto-taxis, para serviços de entrega e variados" />
      </Head>

      <main className={styles.main}>

        <Logo />
        {isLogginButton == true && isSubsButton == true ? (
          <>
            <h1>Bem vindo a sua plataforma de entrega!</h1>
            <div className="backgorund"></div>
    
            <p>Cadastre-se ou faça o seu login</p>
    
            <button onClick={handleSubs} className={styles1.faveButton}>CADASTRAR</button>
            <button onClick={handleLogin} className={styles1.faveButton}>FAZER LOGIN</button>
          </>
        ):(<></>)}
        {
          !isLogginButton ? (
            <Login/>
          ) : ( <></>)

        }
        {
            !isSubsButton ? (<>
              <CreateType/>
              {/* <CreateRetail/> */}
              {/* <CreateCourier/> */}
            </>):(<></>)
        }
      </main>

      <footer className={styles.footer}>
        TEAM 42 OMEGA - 42SP.ORG.BR | 42.RIO
      </footer>
    </div>
  )
}
