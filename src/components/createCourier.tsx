import { useState } from "react";
import styles from "../../styles/Favelog.module.css"

export default function CreateCourier() {

    const [isFormVisible, setIsFormVisible] = useState(true)

    const handleCourierSubmit = async (event:any) => {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            tel: event.target.tel.value,
            pix: event.target.tel.value,
            cpf: event.target.cpf.value,
            vehiclePlate: event.target.vehiclePlate.value,
            vehicleModel: event.target.vehicleModel.value
          }
          const JSONdata = JSON.stringify(data)
          const endpoint = '/api/createCourier'
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
                    <form className={styles.queryForm} id="retailForm" onSubmit={handleCourierSubmit}>
                        <h1>Cadastro</h1>
                        <h2>Entregador</h2>
                        <label className={styles.faveInput} htmlFor="name">Nome Completo</label>
                        <input className={styles.faveInput} type="text" name="name" id="name" required/>
                        <label className={styles.faveInput} htmlFor="email">E-mail</label>
                        <input className={styles.faveInput} type="email" name="" id="email" required/>
                        <label className={styles.faveInput} htmlFor="tel">Telefone</label>
                        <input className={styles.faveInput} type="tel" name="tel" id="tel" required/>
                        <label className={styles.faveInput} htmlFor="pix">PIX</label>
                        <input className={styles.faveInput} type="text" name="pix" id="pix" required/>
                        <label className={styles.faveInput} htmlFor="cpf">CPF</label>
                        <input className={styles.faveInput} type="number" name="cpf" id="cpf" required/>
                        <label className={styles.faveInput} htmlFor="vehiclePlate">Placa do Veículo</label>
                        <input className={styles.faveInput} type="text" name="vehiclePlate" id="vehiclePlate" />
                        <label className={styles.faveInput} htmlFor="vehicleModel">Modelo do Veículo</label>
                        <input className={styles.faveInput} type="text" name="vehicleModel" id="vehicleModel" />
                        <br /><br /><button className={styles.faveButton} type="submit">CADASTRAR</button>
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