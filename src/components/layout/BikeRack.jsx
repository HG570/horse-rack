import styles from './BikeRack.module.css';
import VacanciesNumber from './VacanciesNumber';
import { HiInformationCircle } from 'react-icons/hi2';

function BikeRack({ name, numberOfVacancies, maxNumberOfVacancies, trainLine, lineColor, handleRackInfoOpen }) {
    return (
        <li className={styles.stationCard}>
            <p>{name}</p>
            <VacanciesNumber number={numberOfVacancies} maxNumber={maxNumberOfVacancies} />
            <button onClick={() => handleRackInfoOpen(
                    trainLine,
                    name, 
                    numberOfVacancies, 
                    maxNumberOfVacancies,
                    lineColor,
                )
            }>
                <HiInformationCircle />
            </button>
        </li>
    );
}

export default BikeRack;
