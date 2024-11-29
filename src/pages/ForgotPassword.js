import styles from './ForgotPassword.module.css';
import { useState } from 'react';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    return (
        <>
                <form className={styles.formForgot}>
                    <h1>Recuperação de Senha</h1>
                    <article>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                        <label className={styles.label} htmlFor="email">Email </label>
                    </article>

                    <button>Solicitar Recuperação</button>
                </form>
        </>
    )
}

export default ForgotPassword