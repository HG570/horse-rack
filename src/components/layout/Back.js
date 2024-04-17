import { useNavigate } from 'react-router-dom'
import { HiArrowLeftCircle } from "react-icons/hi2"
import styles from './Back.module.css'

function Back() {
    const history = useNavigate()

    return (
        <>
            <button onClick={() => history(-1)} className={styles.back}>
                <HiArrowLeftCircle />
            </button>
        </>
    )
}

export default Back