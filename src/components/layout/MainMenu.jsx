import styles from '../layout/MainMenu.module.css'
import bikerack_banner from '../../img/bikerack_banner.jpg'
import ciclista_cidadao from '../../img/ciclista_cidadao.png'
import paracycles from '../../img/paracycles.jpg'
import citizen_cyclist_logo from '../../img/citizen_cyclist_logo.png'
import { GrBike } from "react-icons/gr";
import { FaParking } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

function MainMenu() {
    const navigate = useNavigate();
    return (
        <section className={styles.container}>
            <article className={styles.card} onClick={() => (navigate("/bicicletarios"))}>
                <img src={bikerack_banner} alt="Foto Bicicletário" />
                <div className={styles.iconContainer}>
                    <div className={styles.icon}>
                        <GrBike />
                    </div>
                    <h3>Bicicletários</h3>
                </div>
            </article>
            <article className={styles.card} onClick={() => { navigate("/ciclista-cidadao") }}>
                <img src={ciclista_cidadao} alt="Logo Ciclista Cidadão" />
                <div className={styles.iconContainer}>
                    <div className={styles.icon}>
                        <img src={citizen_cyclist_logo} alt="Logo Ciclista Cidadão" />
                    </div>
                    <h3>Ciclista <br/>Cidadao</h3>
                </div>
            </article>
            <article className={styles.card} onClick={() => { navigate("/paraciclos") }}>
                <img src={paracycles} alt="Foto Paraciclos" />
                <div className={styles.iconContainer}>
                    <div className={styles.icon}>
                        <FaParking />
                    </div>
                    <h3>Paraciclos</h3>
                </div>
            </article>
        </section>
    )
}

export default MainMenu