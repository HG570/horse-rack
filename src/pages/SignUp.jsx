import styles from './SignIn.module.css'
import RegisterForm from '../components/forms/RegisterForm'

function SignUp({ step, setStep }) {
    return (
        <>
            <section className={styles.access_menu}>
                <h1>Criar Conta</h1>
                <RegisterForm currentStep={step} setCurrentStep={setStep}/>
            </section >
        </>
    )
}

export default SignUp