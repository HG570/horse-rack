import vacancies from '../img/bicycle_examples.png'
import styles from './CitizenCyclist.module.css'
import { Link } from 'react-router-dom'

function CitizenCyclist() {
    return (
        <>
            <section className={styles.title}>
                <h1>Aqui sua bicicleta é bem-vinda​!</h1>
            </section>
            <article>
                <section className={styles.openingHours}>
                    <article>
                        <h3>Segunda a Sexta</h3>
                        <p>Das 10h às 16h e após as 21h</p>
                    </article>
                    <article>
                        <h3>Sábados, Domingos e Feriados</h3>
                        <p>O dia inteiro</p>
                    </article>
                </section>
                <section className={styles.linkRegulation}>
                    <p>Confira o <Link to="https://www.cptm.sp.gov.br/sua-viagem/bicicletas-CPTM/Documents/Regulamento%20Ciclista%20Cidad%C3%A3o.pdf">Regulamento do Ciclista Cidadão</Link></p>
                </section>
            </article>
            <section className={styles.citizenObservation}>
                <h2>Observações</h2>
                <p>
                    <ul className={styles.citizenList}>
                    <li>São permitidas até quatro bicicletas por viagem*. Embarque somente no último carro, sempre dando prioridade aos demais passageiros.</li>
                    <li>As bicicletas dobráveis são permitidas nos trens em qualquer horário, desde que estejam embaladas em capa/bolsa protetora e seu volume não ultrapasse a medida 150x60x30cm.</li>
                    <li>O capacete é a sua segurança. Pedale consciente.</li>
                    <li>Bicicletas elétricas também são permitidas desde que sejam de tamanho convencional (duas rodas propulsão humana e motor elétrico na roda).</li>
                    <img className={styles.image} src={vacancies} alt="Example of bicycle models" />
                    <li>Em caso de realização de eventos ou similares com previsão de acesso de 5 (cinco) bicicletas ou mais, entre em contato com a Central de Relacionamento com 10 (dez) dias úteis de antecedência, a fim de ser possível a avaliação da melhor forma de atendimento.</li>
                </ul>
                </p>
            </section>
        </>
    )
}

export default CitizenCyclist;