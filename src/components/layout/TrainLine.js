import styles from './TrainLine.module.css';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
import { useCollapse } from 'react-collapsed';
import BikeRack from './BikeRack';

function TrainLine({ name, lineColor, bikeRacks, handleRackInfoOpen }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const colorName = `--color${lineColor}`;
    document.documentElement.style.setProperty(colorName, lineColor);

    return (
        <li className={styles.vacancyList} {...getToggleProps()}>
            <section className={`${styles.card} `} style={{backgroundColor: `${lineColor}`}}>
                <h3>{name}</h3>
                <button >
                    {isExpanded ? <HiChevronUp /> : <HiChevronDown />}
                </button>
            </section>
            <section {...getCollapseProps()}>
                <ul>
                    {bikeRacks.map(bikeRack => (
                        <BikeRack
                            key={bikeRack.bikeRackId}
                            name={bikeRack.name}
                            numberOfVacancies={bikeRack.availableVacancies}
                            maxNumberOfVacancies={bikeRack.vacancies}
                            trainLine={name} 
                            lineColor={lineColor}
                            handleRackInfoOpen={(handleRackInfoOpen)} 
                        />
                    ))}
                </ul>
            </section>
        </li>
    );
}

export default TrainLine;
