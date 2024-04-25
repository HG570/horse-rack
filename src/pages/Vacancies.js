import VacancieNumber from '../components/layout/VacanciesNumber';
import VacancyLine from '../components/layout/VacancyLine';
import styles from './Vacancies.module.css'
import { HiChevronDown } from 'react-icons/hi2'

function Vacancies() {
    return (
        <div>
            <h1 className={styles.title}>Vagas</h1>
            <ul className={styles.container}>
                <VacancyLine />
            </ul>
        </div>
    )
}
export default Vacancies