import { useState } from "react";
import styles from "../../styles/Favelog.module.css"

export default function CreateDelivery() {
    
    const [isFormVisible, setIsFormVisible] = useState(true)
    const [courierID, setCourierID] = useState('')
    const [courierName, setCourierName] = useState('')

    const handleDeliverySubmit = async (event:any) => {
        event.preventDefault();
        const data = {
            requestRetail: 1,
            pickupAddress: event.target.pickup_address.value,
            deliveryAddress: event.target.delivery_address.value
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/createDelivery'
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSONdata
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()
        setIsFormVisible(false)
        setCourierID(result.courier_id)
        await getCourier(courierID)
    }
    
    async function getCourier(courier_ID:string) {
        const courierOption = {
            method: 'GET',
            header: {'Content-Type': 'application/json'},
        }
        // const responseCourier = await fetch(`api/getCourier/${courier_ID}`, courierOption)
        const responseCourier = await fetch('api/getCourier/1', courierOption)
        const resultCourier = await responseCourier.json()
        setCourierName(resultCourier.name)
    }

    return (
        <div className={styles.content}>
            {isFormVisible ? (
                <form className={styles.queryForm} id="deliveryForm" onSubmit={handleDeliverySubmit}>
                    <h1>Chamar</h1>
                    <h2>Entregador</h2>
                    <label htmlFor="pickup_address">Endereço de Retirada</label>
                    <input type="text" name="pickup_address" id="pickup_address" required/>
                    <label htmlFor="delivery_address">Endereço de Entrega</label>
                    <input type="text" name="delivery_address" id="delivery_address" required/>
                    <button type="submit" className={styles.faveButton}>CHAMAR</button>
                </form>
            ) : (
                <>
                    <h1>Seu pedido foi aceito e o {courierName} já está a caminho</h1>
                </>
            )}
        </div>
    )
}