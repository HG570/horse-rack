import styles from './TrainLine.module.css';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
import { useCollapse } from 'react-collapsed';
import BikeRack from './BikeRack';

function TrainLine({ name, bikeRacks, handleQRCodeOpen }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <li className={styles.vacancyList}>
            <section className={`${styles.card} `}>
                <h3>{name}</h3>
                <button {...getToggleProps()}>
                    {isExpanded ? <HiChevronUp /> : <HiChevronDown />}
                </button>
            </section>
            <section {...getCollapseProps()}>
                <ul>
                    {bikeRacks.map(bikeRack => (
                        <BikeRack
                            key={bikeRack.bikeRackId} // Utilize bikeRackId em vez de bikeRack_ID
                            name={bikeRack.name}
                            numberOfVacancies={bikeRack.vacancies}
                            maxNumberOfVacancies={bikeRack.vacancies} // Corrigido, usei a mesma propriedade
                            trainLine={name} 
                            handleQRCodeOpen={handleQRCodeOpen} 
                        />
                    ))}
                </ul>
            </section>
        </li>
    );
}

export default TrainLine;
