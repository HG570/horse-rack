import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { login } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setError('');
        if (email.length > 0 && password.length > 0) {
            const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
            if (emailRegex.test(email)) {
                setError('E-mail inválido.');
                console.log('erro email');
                
            } else if (password.length < 8) {
                setError('A senha que você inseriu está incorreta.');
                console.log('erro password');
            } else if (error.length <= 0) {

                try {
                    const authData = await login(email, password);
    
                    localStorage.setItem('token', authData.token);
                    
                    navigate("/conta");
                    alert('Login realizado com sucesso!');
                } catch (error) {
                    console.error('Authentication failed:', error);
                    setError('Falha ao fazer login. Verifique suas credenciais.');
                    console.log('erro credentials');
                }
            }
        } else {
            setError('Insira todos os dados para fazer login.');
            console.log('erro dados');
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

            <button onClick={(e) => {submit(e)}}>Entrar</button>

        </form>
    )
}

export default LoginForm;