import styles from './PersonalInfo.module.css'
import Back from '../components/layout/Back'

function PersonalInfo() {
    const teste = 'Teste'
    return (
        <>
            <Back />
            <section className={styles.container}>
                <h2>Informações Pessoais</h2>
                <ul>
                    <li>
                        <h4>Nome</h4>
                        <p>{teste}</p>
                    </li>
                    <li>
                        <h4>Email</h4>
                        <p>{teste}@gmail.com</p>
                    </li>
                    <li>
                        <h4>Documento</h4>
                        <p>CPF 123.456.789-10</p>
                    </li>
                    <li>
                        <h4>Data de Nascimento</h4>
                        <p>01/01/2000</p>
                    </li>
                    <li>
                        <h4>Endereço</h4>
                        <p>Rua {teste}, Nº {teste} - Bairro {teste}, Cidade {teste} - Estado {teste}, CEP {teste}</p>
                    </li>
                </ul>
            </section>
            <section className={styles.politic}>
                Consulte nossa <a>Política de Privacidade</a>.
            </section>
        </>
    )
}

export default PersonalInfo