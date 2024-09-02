import TrainLine from '../components/layout/TrainLine';
import styles from './Paracycles.module.css'

function Paracycles() {

    return (
        <>
            <p className={styles.text}>Permitem estacionar a bicicleta próximo à estação. O espaço é aberto e não há monitoramento do local, portanto a utilização ocorre por conta da responsabilidade do próprio ciclista.</p>
            <ul className={styles.container}>
                <TrainLine name="Linha 12 - Safira" bikeRacks={[{"name": "São Miguel Paulista", "vacancies": "33", "trainLine": "Linha 12 - Safira"}]} lineColor="#1C146B"></TrainLine>
            </ul>
        </>
    )
}

export default Paracycles;