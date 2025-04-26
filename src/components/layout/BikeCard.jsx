import styles from "./BikeCard.module.css"

function BikeCard({ bikeRack, railwayLine, entryDate, attendant }) {
    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);

        const formattedDate = date.toLocaleDateString("pt-BR");
        const formattedTime = date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          });
        return `${formattedDate} ${formattedTime}`;
    };

    const maxExitDate = (dateTimeString) => {
        const date = new Date(dateTimeString);
        date.setDate(date.getDate() + 1);
        const formattedDate = date.toLocaleDateString("pt-BR");
        const formattedTime = date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          });
        return `${formattedDate} ${formattedTime}`;
    }
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <h3>{bikeRack}</h3>
            </div>
            <div className={styles.subtitle}><p>{railwayLine}</p></div>
            <div className={styles.data}>
                <p className={styles.row}>Data de Entrada: <div>{formatDateTime(entryDate)}</div></p>
                <p className={styles.row}>Limite de Saída: <div>{maxExitDate(entryDate)}</div></p>
                {attendant !== null ? <p className={styles.row}>Atendente: <div>{attendant}</div></p> : <p>Totem de Autoatendimento</p>}
            </div>
        </div>
    );
}

export default BikeCard;