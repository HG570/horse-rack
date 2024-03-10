import styles from '../style/vacancies.module.css'

function Vacancies() {
    return (
        <div>
            <h1>Vagas</h1>
            <ul className={styles.container}>
                <li className={styles.card}>
                    <h3>Linha 0 - Teste</h3>
                </li>
            </ul>
        </div>
    )
}
export default Vacancies