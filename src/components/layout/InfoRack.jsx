import styles from './InfoRack.module.css';
import { HiOutlineXMark } from 'react-icons/hi2';
import VacancieNumber from './VacanciesNumber';

function InfoRack({ infoOpen, handleRackInfoOpen, trainLine, lineColor, name, numberOfVacancies, maxNumberOfVacancies }) {

    if (infoOpen) {
        return (
            <section className={styles.background} onClick={handleRackInfoOpen}>
                <section className={styles.qrcodeCard}>
                    <article className={styles.card} style={{backgroundColor: lineColor}}>
                        <h3>{trainLine}</h3>
                        <button onClick={handleRackInfoOpen}>
                            <HiOutlineXMark />
                        </button>
                    </article>
                    <article className={styles.stationName}>
                            <p>{name}</p>
                    </article>
                    <article className={styles.data}>
                        <article className={styles.station}>
                            <p>Total de Vagas</p>
                            <p>{maxNumberOfVacancies} vagas</p>
                        </article>
                        <article className={styles.station}>
                            <p>Vagas Disponíveis:</p>
                            <VacancieNumber number={numberOfVacancies} maxNumber={maxNumberOfVacancies}/>
                        </article>
                        <ul className={styles.operation}>
                            <li>Funcionamento: Todos os Dias das 04:00 às 00:00</li>
                        </ul>
                    </article>
                </section>
            </section>
        );
    }
    return null;
}

export default InfoRack;
