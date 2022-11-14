import { useState } from "react";
import styles from "../../styles/Favelog.module.css"

export default function Login() {

    const [isFormVisible, setIsFormVisible] = useState(true)

    const handleRetailSubmit = async (event:any) => {
        event.preventDefault();
        const data = {
            email: event.target.email.value,
            senha: event.target.password.value
          }
          const JSONdata = JSON.stringify(data)
          const endpoint = '/api/createRetail'
          const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSONdata
          }
          const response = await fetch(endpoint, options)
          const result = await response.json()
          setIsFormVisible(false)
          console.log(result)
    }
    return (
        <div className={styles.content}>
            {isFormVisible ? (
                <div className={styles.formSignIn}>
                    <form className={styles.queryForm} id="retailForm" onSubmit={handleRetailSubmit}>
                        <h1>Acessar plataforma</h1>
                        <h2>Bora bill!</h2>
                        <label className={styles.faveImput} htmlFor="email">E-mail</label>
                        <input className={styles.faveImputs} type="email" name="" id="email" required/>
                        <label className={styles.faveImput} htmlFor="tel">Senha</label>
                        <input className={styles.faveImput} type="password" name="password" id="password" required/>
                        <br /><br /><button className={styles.faveButton} type="submit">LOGIN</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h1>BORA BILL!</h1>
                </div>
            )}
        </div>
    )
}