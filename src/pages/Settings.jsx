import { Link } from 'react-router-dom'
import styles from './Settings.module.css'
import { HiMiniShieldCheck, HiMiniQuestionMarkCircle, HiMiniInformationCircle } from 'react-icons/hi2';
import { FaUniversalAccess} from 'react-icons/fa';

function Settings() {
    return (
        <>
            <section className={styles.options}>
                <Link to="/acessibilidade" className={styles.option}>
                <FaUniversalAccess />
                    <h4>Acessibilidade</h4>
                </Link>

                <Link to="/politica-privacidade" className={styles.option}>
                    <HiMiniShieldCheck />
                    <h4>Política de Privacidade</h4>
                </Link>

                <Link to="/suporte" className={styles.option}>
                    <HiMiniQuestionMarkCircle />
                    <h4>Suporte</h4>
                </Link>

                <Link to="/sobre" className={styles.option}>
                    <HiMiniInformationCircle />
                    <h4>Sobre o Aplicativo</h4>
                </Link>
            </section>
        </>
    )
}

export default Settings;