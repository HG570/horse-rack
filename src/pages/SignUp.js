import styles from './SignIn.module.css'
import Back from '../components/layout/Back'

function SignUp() {
    return (
        <>
            <Back />
            <section className={styles.access_menu}>
                <h1>Criar Conta</h1>
                <div>
                    <label for="name">Nome</label>
                    <input type="text" placeholder="Nome" id="name" name="name" />
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" placeholder="Email" id="email" name="email" />
                </div>
                <div>
                    <label for="senha">Senha</label>
                    <input type="password" placeholder="Senha" id="senha" name="senha" />
                </div>
                <div>
                    <label for="senha">Confirme a senha</label>
                    <input type="password" placeholder="Senha" id="senha" name="senha" />
                </div>
                <button>Criar Conta</button>
            </section>
        </>
    )
}

export default SignUp