import { useNavigate } from 'react-router-dom'
import { HiMiniArrowLeftCircle } from "react-icons/hi2"
import styles from './Back.module.css'

function Back() {
    const history = useNavigate()

    return (
        <>
            <button onClick={() => history(-1)} className={styles.back}>
                <HiMiniArrowLeftCircle viewBox="2 2 16 16" />
            </button>
        </>
    )
}

export default Back