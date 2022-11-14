import { useState } from "react";
import style from '../../styles/Favelog.module.css'
import CreateCourier from "./createCourier";
import CreateRetail from "./createRetail";

export function CreateType() {
    const [isRetailButtom, setIsRetailButtom] = useState(true)
    const [isCourierButoom, setIsCourierButoom] = useState(true)
    const [isRetailForm, setIsRetailForm] = useState(false)
    const [isCourierForm, setIsCourierForm] = useState(false)

    function handleRetailButtom() {
        setIsRetailButtom(false)
        setIsCourierButoom(false)
        setIsRetailForm(true)
    }
    function handleCourierButtom() {
        setIsRetailButtom(false)
        setIsCourierButoom(false)
        setIsCourierForm(true)
    }

    return (
        <>
            {(isRetailButtom == true && isCourierButoom == true) ? (
                <>
                    <button onClick={handleRetailButtom} className={style.faveButton}>Empreendedor</button>
                    <button onClick={handleCourierButtom} className={style.faveButton}>Entregador</button>
                </>
            ):(<></>)}
            {isRetailForm ? (
                <CreateRetail/>
            ):(<></>)}
            {isCourierForm ? (
                <CreateCourier/>
            ):(<></>)}
        </>
    )
}