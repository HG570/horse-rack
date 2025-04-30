import styles from './SignIn.module.css'
import RegisterForm from '../components/forms/RegisterForm'

function SignUp() {
    return (
        <>
            <section className={styles.access_menu}>
                <h1>Criar Conta</h1>
                <RegisterForm />
            </section >
        </>
    )
}

export default SignUp