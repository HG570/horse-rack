import styles from './QRCodeVacancy.module.css';
import { HiOutlineXMark } from 'react-icons/hi2';
import QRCodeGenerator from '../utils/QRCodeGenerator';

export default function QRCodeVacancy({ isOpen, onClose }) {
    let color = "var(--red-cptm)";
    document.documentElement.style.setProperty('--lineColor', color);
    const userName = "Rafael Pinheiro";
    const documento = "CPF 000.000.000-00";
    const userToken = userName + documento;

    if (isOpen) {
        return (
            <section className={styles.qrcodeCard}>
                <article className={`${styles.card} `}>
                    <h3>QR Code</h3>
                    <button onClick={onClose}>
                        <HiOutlineXMark />
                    </button>
                </article>
                <article className={styles.data}>
                    <QRCodeGenerator value={userToken} />
                    <ul>
                        <li>Documento: {documento}</li>
                    </ul>
                </article>
            </section>
        );
    }
    return null;
}
