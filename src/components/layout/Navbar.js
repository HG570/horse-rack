import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { HiMiniHome, HiMiniBell, HiMiniUser } from 'react-icons/hi2'

function Navbar(){
    return (
        <div className={styles.background_navbar}>
            <ul className={styles.navbar}>
                <li>
                    <Link to="/">
                        <HiMiniHome />
                        Início
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <HiMiniBell />
                        Notificações
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <HiMiniUser />
                        Conta
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar