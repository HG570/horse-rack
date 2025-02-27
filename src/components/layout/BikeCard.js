import styles from "./BikeCard.module.css"

function BikeCard() {
    return (
        <div className={styles.card}>
            <h3>Bicicletario ID</h3>
            <p>Data de Entrada:</p>
            <p>Horário Máximo de Saída:</p>
        </div>
    );
}

export default BikeCard;