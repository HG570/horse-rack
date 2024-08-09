import styles from './BikeRack.module.css';
import VacanciesNumber from './VacanciesNumber';
import { HiOutlinePlusSmall } from 'react-icons/hi2';

function BikeRack({ name, numberOfVacancies, maxNumberOfVacancies, trainLine, handleQRCodeOpen }) {
    return (
        <li className={styles.stationCard}>
            <p>{name}</p>
            <VacanciesNumber number={numberOfVacancies} maxNumber={maxNumberOfVacancies} />
            <button onClick={() => handleQRCodeOpen(
                    trainLine,
                    name, 
                    numberOfVacancies, 
                    maxNumberOfVacancies
                )
            }>
                <HiOutlinePlusSmall />
            </button>
        </li>
    );
}

export default BikeRack;
