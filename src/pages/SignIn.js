import { Link } from 'react-router-dom'
import styles from './SignIn.module.css'
import Back from '../components/layout/Back'

function SignIn() {
    return (
        <>  
            <Back />
            <section className={styles.access_menu}>
                    <h1>Login</h1>
                    <div>
                    <label for="email">Email</label>
                    <input type="email" placeholder="Email" id="email" name="email" />
                    </div>
                    <div>
                    <label for="senha">Senha</label>
                    <input type="password" placeholder="Senha" id="senha" name="senha" />
                    <Link to='/forgotpassword'>Esqueci a senha</Link>
                    </div>
                    <button>Entrar</button>
                    <Link to="/signup" className={styles.option}>Não Tenho Conta </Link>
            </section>
        </>
    )
}

export default SignIn