import { Link } from 'react-router-dom'
import styles from '../layout/MainMenu.module.css'
import bikerack_banner from '../../img/bikerack_banner.jpg'
import ciclista_cidadao from '../../img/ciclista_cidadao.png'
import vacancies from '../../img/vacancies.jpg'
import paracycles from '../../img/paracycles.jpg'

function MainMenu() {
    return(
        <section className={styles.container}>
            <article className={styles.card}>
                <Link to="/vagas">sr
                    <img src={vacancies} alt="Foto Vagas do Bicicletário"/>
                    <h3>Vagas</h3>
                </Link>
            </article>
            <article className={styles.card}>
                <img src={bikerack_banner} alt="Foto Bicicletário"/>
                <h3>Bicicletários</h3>
            </article>
            <article className={styles.card}>
                <img src={ciclista_cidadao} alt="Logo Ciclista Cidadão"/>
                <h3>Ciclista Cidadão</h3>  
            </article>
            <article className={styles.card}>
                <img src={paracycles} alt="Foto Paraciclos"/>
                <h3>Paraciclos</h3>
            </article>
        </section>
    )
}

export default MainMenu