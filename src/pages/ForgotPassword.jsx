import styles from './ForgotPassword.module.css';
import { useState } from 'react';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    return (
        <>
            <form className={styles.formForgot}>
                <h1>Recuperação de Senha</h1>
                <article>
                    <p>
                        O sistema automático de recuperação de senha ainda não está disponível.
                        Para recuperar seu acesso, entre em contato com o suporte ou dirija-se a um bicicletário local que utilize este sistema.
                    </p>
                </article>
                {/*
                    <article>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                        <label className={styles.label} htmlFor="email">Email </label>
                        
                    </article>

                    <button>Solicitar Recuperação</button>
                    */}
            </form>
        </>
    )
}

export default ForgotPassword