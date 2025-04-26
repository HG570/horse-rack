import { Link } from 'react-router-dom'
import styles from './SignIn.module.css'
import LoginForm from '../components/forms/LoginForm'

function SignIn() {

    return (
        <> 
            <section className={styles.access_menu}>
                <h1> Acessar Conta </h1>
                    <LoginForm />
                    <Link to="/signup" className={styles.option}>Não Tenho Conta </Link>
                    <Link to='/esqueci-a-senha' className={styles.forgot}>Esqueci a senha</Link>
            </section>
        </>
    )
}

export default SignIn