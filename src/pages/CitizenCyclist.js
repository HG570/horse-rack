import vacancies from '../img/bicycle_examples.png'
import styles from './CitizenCyclist.module.css'
import Back from '../components/button/Back'

function CitizenCyclist() {
    return (
        <>
        <Back />
        <h1>Aqui sua bicicleta é bem-vinda​!</h1>
        <section className={styles.openingHours}>
            <article>
                <h2>Segunda a Sexta</h2>
                <p>Das 10h às 16h e após as 21h</p>
            </article>
            <article>
                <h2>Sábados, Domingos e Feriados</h2>
                <p>O dia inteiro</p>
            </article>
        </section>
        <ul>
            <h2>Observações</h2>
            <li>São permitidas até quatro bicicletas por viagem*. Embarque somente no último carro, sempre dando prioridade aos demais passageiros.</li>
            <li>As bicicletas dobráveis são permitidas nos trens em qualquer horário, desde que estejam embaladas em capa/bolsa protetora e seu volume não ultrapasse a medida 150x60x30cm.</li>
            <li>O capacete é a sua segurança. Pedale consciente.</li>
            <li>Bicicletas elétricas também são permitidas desde que sejam de tamanho convencional (duas rodas propulsão humana e motor elétrico na roda).</li>
            <img className={styles.image} src={vacancies} alt="Example of bicycle models"/>
            <li>m caso de realização de eventos ou similares com previsão de acesso de 5 (cinco) bicicletas ou mais, entre em contato com a Central de Relacionamento com 10 (dez) dias úteis de antecedência, a fim de ser possível a avaliação da melhor forma de atendimento.</li>
        </ul>
        </>
    )
}

export default CitizenCyclist;