import { useState } from "react";
import styles from "../../styles/Favelog.module.css"
import CreateDelivery from "./createDelivery";

export default function Login() {

    const [isFormVisible, setIsFormVisible] = useState(true)
    const [isDeliveryVisible, setIsDeliveryVisible] = useState(false)

    function handleLogin() {
        setIsFormVisible(false)
        setIsDeliveryVisible(true)
    }

    return (
        <div className={styles.content}>
            {isFormVisible ? (
                <div className={styles.formSignIn}>
                    <form className={styles.queryForm} id="retailForm">
                        <h1>Acessar plataforma</h1>
                        <h2>Bora bill!</h2>
                        <label className={styles.faveImput} htmlFor="email">E-mail</label>
                        <input className={styles.faveImputs} type="email" name="" id="email" required/>
                        <label className={styles.faveImput} htmlFor="tel">Senha</label>
                        <input className={styles.faveImput} type="password" name="password" id="password" required/>
                        <br /><br /><button className={styles.faveButton} type="submit" onClick={handleLogin}>LOGIN</button>
                    </form>
                    <div>
                        <h1>BORA BILL!</h1>
                    </div>
                </div>
            ) : (<></>)}
            {isDeliveryVisible ? (<CreateDelivery/>):(<></>)}
        </div>
    )
}