import styles from './Policy.module.css'

function Policy() {

    return (
        <>
            <section className={styles.policy}>
                <article>
                    <p>
                        Ao utilizar o sistema Bicicletários, você concorda com a coleta e uso dos seguintes dados pessoais para fins de cadastro, identificação e gestão de bicicletas:
                        <br /><br />
                        <ul>
                            <li>Dados de Conta: Nome completo, e-mail, senha, tipo e número de documento, data de nascimento, endereço completo (CEP, número, logradouro, bairro, cidade e estado).</li>
                            <li>Dados de Bicicleta: Modelo, cor, número de chassi, ano e detalhes adicionais.</li>
                        </ul>
                        <br />
                        Essas informações são utilizadas exclusivamente para garantir o funcionamento adequado do sistema, facilitar o suporte técnico e manter a segurança dos usuários e suas bicicletas.
                        <br /><br />
                        Seus dados não serão compartilhados com terceiros sem seu consentimento, exceto quando exigido por lei. O armazenamento é feito de forma segura, seguindo boas práticas de proteção da informação.
                    </p>
                </article>
            </section>
        </>
    )
}

export default Policy