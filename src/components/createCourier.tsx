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
                <form className={styles.queryForm} id="courierForm" onSubmit={handleCourierSubmit}>
                    <h1>Cadastro</h1>
                    <h2>Entregador</h2>
                    <label htmlFor="name">Nome Completo</label>
                    <input type="text" name="name" id="name" required/>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="" id="email" required/>
                    <label htmlFor="tel">Telefone</label>
                    <input type="tel" name="tel" id="tel" required/>
                    <label htmlFor="pix">PIX</label>
                    <input type="text" name="pix" id="pix" required/>
                    <label htmlFor="cpf">CPF</label>
                    <input type="number" name="cpf" id="cpf" required/>
                    <label htmlFor="vehiclePlate">Placa do Veículo</label>
                    <input type="text" name="vehiclePlate" id="vehiclePlate" required/>
                    <label htmlFor="vehicleModel">Modelo do Veículo</label>
                    <input type="text" name="vehicleModel" id="vehicleModel" required/>
                    <button type="submit">CADASTRAR</button>
                </form>
            ) : (
                <div>
                    <h1>CADASTRADO COM SUCESSO!</h1>
                </div>
            )}
        </div>
    )
}