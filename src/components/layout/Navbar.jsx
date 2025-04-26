import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { HiMiniHome, HiOutlineQrCode, HiMiniUser } from 'react-icons/hi2'

function Navbar({ onOpenQRCode, onClose }) {
    const navigate = useNavigate()
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
                        <button onClick={() => {localStorage.getItem('token') != null ? onOpenQRCode() : navigate('/signin')}}>
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