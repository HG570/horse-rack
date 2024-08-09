import { Link } from 'react-router-dom'
import styles from '../layout/MainMenu.module.css'
import bikerack_banner from '../../img/bikerack_banner.jpg'
import ciclista_cidadao from '../../img/ciclista_cidadao.png'
import paracycles from '../../img/paracycles.jpg'

function MainMenu() {
    return(
        <section className={styles.container}>
            <article className={styles.card}>
                <Link to="/bicicletarios">
                    <img src={bikerack_banner} alt="Foto Bicicletário"/>
                    <h3>Bicicletários</h3>
                </Link>
            </article>
            <article className={styles.card}>
                <Link to="/ciclista-cidadao">
                    <img src={ciclista_cidadao} alt="Logo Ciclista Cidadão"/>
                    <h3>Ciclista Cidadão</h3>  
                </Link>
            </article>
            <article className={styles.card}>
                <Link to="/paraciclos">
                    <img src={paracycles} alt="Foto Paraciclos"/>
                    <h3>Paraciclos</h3>
                </Link>
            </article>
        </section>
    )
}

export default MainMenu