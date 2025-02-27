import BikeCard from "../components/layout/BikeCard";
import styles from "./MyVacancies.module.css"

function MyVacancies() {
    return (
        <>
            <div className={styles.cards}>
                <BikeCard />
                <BikeCard />
            </div>
            {/* Your component to display the list of vacancies */}
        </>
    );
}

export default MyVacancies;