import styles from './VacanciesNumber.module.css'
let number = 200;
let occupation = styles.normal;

const maxNumber = 200;
const percentage = (number / maxNumber) * 100;


function VacancieNumber(){
    if (percentage >= 75) {
        occupation = styles.high;
    } else if (percentage > 25 && percentage < 75) {
        occupation = styles.medium;
    } else if (percentage <= 25) {
        occupation = styles.low;
    } else {
        occupation = styles.normal;
    }

    return (
        <>
            <ul className={styles.vacancies_number}>
                <li className={`${styles.number} ${occupation} `}>{number}</li>
                <li className={styles.vacancy}>Vagas</li>
            </ul>
        </>
    )
}

export default VacancieNumber