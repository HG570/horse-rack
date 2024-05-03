import { Link } from 'react-router-dom'
import styles from './Account.module.css'
import { HiMiniArrowRightOnRectangle, HiMiniCog6Tooth, HiMiniDocumentText } from "react-icons/hi2";

function Account() {
    const name = 'Teste'
    const userImage = 'https://via.placeholder.com/90.png'
    return (
        <>
            <h1 className={styles.title}>Conta</h1>
            <section className={styles.userInfo}>
                <img src={userImage}></img>
                <h3>{name}</h3>
            </section>
            <section className={styles.options}>
                <Link to="/personal-info" className={styles.option}>
                    <HiMiniDocumentText />
                    <h4>Dados Pessoais</h4>
                </Link>
                <Link to="/config" className={styles.option}>
                    <HiMiniCog6Tooth />
                    <h4>Configurações</h4>
                </Link>
                <Link to="/signin" className={styles.option}>
                    <HiMiniArrowRightOnRectangle />
                    <h4>Sair</h4>
                </Link>
            </section>
        </>
    )
}

export default Account