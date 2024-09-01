import styles from '../layout/MainMenu.module.css'
import bikerack_banner from '../../img/bikerack_banner.jpg'
import ciclista_cidadao from '../../img/ciclista_cidadao.png'
import paracycles from '../../img/paracycles.jpg'
import { useNavigate } from 'react-router-dom'

function MainMenu() {
    const navigate = useNavigate();
    return(
        <section className={styles.container}>
            <article className={styles.card} onClick={() => (navigate("/bicicletarios"))}>
                    <img src={bikerack_banner} alt="Foto Bicicletário"/>
                    <h3>Bicicletários</h3>
            </article>
            <article className={styles.card} onClick={() => {navigate("/ciclista-cidadao")}}>
                    <img src={ciclista_cidadao} alt="Logo Ciclista Cidadão"/>
                    <h3>Ciclista Cidadão</h3>  
            </article>
            <article className={styles.card} onClick={() => {navigate("/paraciclos")}}>
                    <img src={paracycles} alt="Foto Paraciclos"/>
                    <h3>Paraciclos</h3>
            </article>
        </section>
    )
}

export default MainMenu