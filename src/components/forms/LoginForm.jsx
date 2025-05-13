import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { login } from '../../services/Auth';
import { getBicycles } from "../../services/Bicycle"
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [bicycles, setBicycles] = useState(null);
    const userId = localStorage.getItem('userId');
    
    const submit = async (e) => {
        e.preventDefault();
        setError('');
        if (email.length > 0 && password.length > 0) {
            const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
            if (emailRegex.test(email)) {
                setError('E-mail inválido.');

            } else if (password.length < 8) {
                setError('A senha que você inseriu está incorreta.');
            } else if (error.length <= 0) {

                try {
                    const authData = await login(email, password);
                    try {
                        const userBicycle = await getBicycles(userId);
                        setBicycles(userBicycle);
                    } catch (error) {
                        console.error('Error fetching profile:', error);
                    }
                    console.log(bicycles);
                    !bicycles ? navigate("/minhas-bicicletas") : navigate("/conta");
                    alert('Login realizado com sucesso!');
                } catch (error) {
                    console.error('Authentication failed:', error);
                    setError('Falha ao fazer login. Verifique suas credenciais.');
                }
            }
        } else {
            setError('Insira todos os dados para fazer login.');
        }

    }

    return (
        <form className={styles.formSignIn} >
            <article>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <label className={styles.label} htmlFor="email">Email </label>
            </article>
            <article>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <label htmlFor="password">Senha </label>
            </article>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button onClick={(e) => { submit(e) }}>Entrar</button>

        </form>
    )
}

export default LoginForm;