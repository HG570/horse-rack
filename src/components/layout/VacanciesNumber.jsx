import styles from './VacanciesNumber.module.css'

let occupation = styles.normal;


function VacancieNumber({number, maxNumber}){
    const percentage = (number / maxNumber) * 100;
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