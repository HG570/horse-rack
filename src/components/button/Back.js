//import { useNavigate } from 'react-router-dom'
import { HiMiniArrowLeftCircle } from "react-icons/hi2"
import styles from './Back.module.css'

function Back() {
    const goBack = () => {  window.history.back();}

    return (
        <>
            <button onClick={goBack} className={styles.back}>
                <HiMiniArrowLeftCircle viewBox="2 2 16 16" />
            </button>
        </>
    )
}

export default Back