import { useState } from "react";
import styles from "../../styles/Favelog.module.css"

export default function CreateRetail() {

    const [isFormVisible, setIsFormVisible] = useState(true)

    const handleRetailSubmit = async (event:any) => {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            tel: event.target.tel.value,
            pix: event.target.tel.value,
            pickupaddress: event.target.pickup_address.value,
            cpf: event.target.cpf.value
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
                        <h1>Cadastro</h1>
                        <h2>Empreendedor</h2>
                        <label htmlFor="name">Nome Completo</label>
                        <input type="text" name="name" id="name" required/>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="" id="email" required/>
                        <label htmlFor="tel">Telefone</label>
                        <input type="tel" name="tel" id="tel" required/>
                        <label htmlFor="pix">PIX</label>
                        <input type="text" name="pix" id="pix" required/>
                        <label htmlFor="pickup_address">Endereço</label>
                        <input type="text" name="pickup_address" id="pickup_address" required/>
                        <label htmlFor="cpf">CPF</label>
                        <input type="number" name="cpf" id="cpf" required/>
                        <button className={styles.faveButton} type="submit">CADASTRAR</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h1>CADASTRADO COM SUCESSO!</h1>
                </div>
            )}
        </div>
    )
}