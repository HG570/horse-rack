import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { HiMiniHome, HiOutlineQrCode, HiMiniUser } from 'react-icons/hi2'
import { getBicycles } from "../../services/Bicycle"


function Navbar({ onOpenQRCode, myBicycles, onClose }) {
    const navigate = useNavigate()

    const handleQRCodeClick = async () => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/signin')
            return
        }

        const userId = localStorage.getItem('userId')
        if (!userId) {
            navigate('/signin')
            return
        }

        try {
            const bikes = await getBicycles(userId)
            if (bikes && bikes.length > 0) {
                onOpenQRCode()
                myBicycles(bikes)
            } else {
                navigate('/minhas-bicicletas')
            }
        } catch (error) {
            navigate('/minhas-bicicletas')
        }
    }
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
                        <button onClick={handleQRCodeClick}>
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