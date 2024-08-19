import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { HiMiniHome, HiOutlineQrCode, HiMiniUser } from 'react-icons/hi2'

function Navbar({ onOpenQRCode, onClose }) {
    return (
        <>
            <section className={styles.background_navbar}>
                <ul className={styles.navbar}>
                    <li>
                        <Link to="/" onClick={onClose}>
                            <HiMiniHome />
                            Início
                        </Link>
                    </li>
                    <li>
                        <button onClick={onOpenQRCode}>
                            <HiOutlineQrCode />
                            QRCode
                        </button>
                    </li>
                    <li>
                        <Link to="/conta" onClick={onClose}>
                            <HiMiniUser />
                            Conta
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Navbar