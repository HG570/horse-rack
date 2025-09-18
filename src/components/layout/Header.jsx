// import styles from './Header.module.css'
import { useLocation } from 'react-router-dom'
import Back from '../button/Back'
import styles from './Header.module.css'

function Header({ title, step, setStep }) {
    const location = useLocation();
    const isNotHomePage = location.pathname !== '/' && location.pathname !== '/conta';
    if (!title){
        title = "Bicicletários"
    }
    
    return (
        <>
            {isNotHomePage ? (
                <Back step={step} setStep={setStep} />
            ) : (
                    <></>
            )}
            <h1 className={styles.title}>{title}</h1>
        </>
    )
}

export default Header