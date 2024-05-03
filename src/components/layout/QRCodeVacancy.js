import { useState } from 'react'
import styles from './QRCodeVacancy.module.css'
import VacanciesNumber from './VacanciesNumber'
import { HiOutlineXMark } from 'react-icons/hi2'

export default function QRCodeVacancy({isOpen, setModalOpen}) {
    const number = "0"
    const line = "Teste"
    let color = "var(--red-cptm)"
    document.documentElement.style.setProperty('--lineColor', color);
    const name = "Rafael Pinheiro"
    const documento = "CPF 000.000.000-00"

    if (isOpen){
        return(
            <section className={styles.qrcodeCard}>
                <article className={`${styles.card} `}>
                    <h3>Linha {number} - {line}</h3>
                    <button onClick={setModalOpen}>
                        <HiOutlineXMark/>
                    </button>
                </article>
                <article className={styles.station}>
                    <h4>Estação Teste</h4>
                    <VacanciesNumber />
                </article>
                <article className={styles.data}>
                    <img src="https://i.ibb.co/z4z4z4z/Screenshot-from-2021-04-17-17-10-01.png" alt="QR Code" />
                    <ul>
                        <li>Nome: {name}</li>
                        <li>Documento: {documento}</li>
                    </ul>
                </article>
            </section>
        )
    }
    return null
}