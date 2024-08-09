import styles from './QRCodeVacancy.module.css';
import VacanciesNumber from './VacanciesNumber';
import { HiOutlineXMark } from 'react-icons/hi2';
import QRCodeGenerator from '../utils/QRCodeGenerator';

export default function QRCodeVacancy({ isOpen, setQRCodeOpen, trainLine, name, numberOfVacancies, maxNumberOfVacancies }) {
    let color = "var(--red-cptm)";
    document.documentElement.style.setProperty('--lineColor', color);
    const userName = "Rafael Pinheiro";
    const documento = "CPF 000.000.000-00";
    const userToken = userName + documento;

    if (isOpen) {
        return (
            <section className={styles.qrcodeCard}>
                <article className={`${styles.card} `}>
                    <h3>{trainLine}</h3>
                    <button onClick={setQRCodeOpen}>
                        <HiOutlineXMark />
                    </button>
                </article>
                <article className={styles.station}>
                    <h4>{name}</h4>
                    <VacanciesNumber number={numberOfVacancies} maxNumber={maxNumberOfVacancies} />
                </article>
                <article className={styles.data}>
                    <QRCodeGenerator value={userToken} />
                    <ul>
                        <li>Nome: {userName}</li>
                        <li>Documento: {documento}</li>
                    </ul>
                </article>
            </section>
        );
    }
    return null;
}
