import styles from './VacancyLine.module.css'
import { HiChevronDown, HiChevronUp, HiOutlinePlusSmall } from 'react-icons/hi2'
import { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import VacanciesNumber from './VacanciesNumber'
import QRCodeVacancy from './QRCodeVacancy'

function VacancyLine() {
    const [openModal, setOpenModal] = useState(false)
    const number = "0"
    const line = "Teste"
    let color = "var(--red-cptm)"
    document.documentElement.style.setProperty('--lineColor', color);

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <>
            <li className={styles.vacancyList}>
                <section className={`${styles.card} `}>
                    <h3>Linha {number} - {line}</h3>
                    <button {...getToggleProps()}>
                        {isExpanded ? <HiChevronUp /> : <HiChevronDown />}
                    </button>
                </section>
                <section {...getCollapseProps()}>
                    <ul>
                        <li className={styles.stationCard}>
                            <p>
                                Estação Teste
                            </p>
                            <VacanciesNumber />
                            <button onClick={() => setOpenModal(true)}><HiOutlinePlusSmall /></button>
                        </li>
                        <li className={styles.stationCard}>
                            <p>
                                Estação Teste
                            </p>
                            <VacanciesNumber />
                            <button><HiOutlinePlusSmall /></button>
                        </li>
                        <li className={styles.stationCard}>
                            <p>
                                Estação Teste
                            </p>
                            <VacanciesNumber />
                            <button><HiOutlinePlusSmall /></button>
                        </li>
                    </ul>
                </section>
            </li>
            <QRCodeVacancy isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
        </>
    )
}
export default VacancyLine