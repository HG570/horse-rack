import styles from './SignIn.module.css'
import Back from '../components/layout/Back'

function ForgotPassword (){
    return (
        <>
            <Back />
            <section className={styles.access_menu}>
                    <h1>Recuperação de Senha</h1>
                    <div>
                    <label for="email">Email</label>
                    <input type="email" placeholder="Email" id="email" name="email" />
                    </div>
                    <button>Solicitar Recuperação</button>
            </section>
        </>
    )
}

export default ForgotPassword