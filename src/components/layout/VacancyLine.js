import styles from './VacancyLine.module.css'
import { HiChevronDown, HiChevronUp, HiOutlinePlusSmall } from 'react-icons/hi2'
import { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import VacanciesNumber from './VacanciesNumber'

function VacancyStation() {
    return (
        <>
            <li className={styles.stationCard}>
                <p>
                Estação Teste 
                </p>
                <VacanciesNumber/>
                <button><HiOutlinePlusSmall /></button>
            </li>
        </>
    )
}

function VacancyLine() {
    const number = "0"
    const line = "Teste"
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <>
            <li className={styles.vacancyList}>
                <section className={styles.card}>
                    <h3>Linha {number} - {line}</h3>
                    <button {...getToggleProps()}>
                        {isExpanded ? <HiChevronUp /> : <HiChevronDown />}
                    </button>
                </section>
                <section {...getCollapseProps()}>
                    <ul>
                        <VacancyStation />
                        <VacancyStation />
                        <VacancyStation />
                    </ul>
                </section>
            </li>
        </>
    )
}
export default VacancyLine