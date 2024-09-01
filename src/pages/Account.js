import { Link } from 'react-router-dom'
import styles from './Account.module.css'
import { HiMiniArrowRightOnRectangle, HiSquare3Stack3D, HiMiniCog6Tooth, HiMiniDocumentText, HiMiniUserCircle } from "react-icons/hi2";

function Account() {
    return (
        <>
            <section className={styles.title}>
                <h1 className={styles.title}>Conta</h1>
            </section>
            <section className={styles.options}>
                {localStorage.getItem('token') != null ?
                    (
                        <>
                            <Link to="/personal-info" className={styles.option}>
                                <HiMiniDocumentText />
                                <h4>Dados Pessoais</h4>
                            </Link>
                            <Link to="/config" className={styles.option}>
                                <HiSquare3Stack3D />
                                <h4>Vagas Ocupadas</h4>
                            </Link>
                            <Link to="/config" className={styles.option}>
                                <HiMiniCog6Tooth />
                                <h4>Configurações</h4>
                            </Link>
                            <Link to="/" onClick={() => {
                                localStorage.clear();
                                sessionStorage.clear();
                            }} className={styles.option}>
                                <HiMiniArrowRightOnRectangle />
                                <h4>Sair</h4>
                            </Link>
                        </>
                    ) :
                    (
                        <>
                            <Link to="/signin" className={styles.option}>
                                <HiMiniUserCircle />
                                <h4>Entrar na sua Conta</h4>
                            </Link>
                            <Link to="/config" className={styles.option}>
                                <HiMiniCog6Tooth />
                                <h4>Configurações</h4>
                            </Link>
                        </>
                    )
                }
            </section>
        </>
    )
}

export default Account