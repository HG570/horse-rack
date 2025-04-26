import styles from "./MyVacancies.module.css"
import { getMyVacancy } from "./../services/MyVacancy"
import { useEffect, useState } from 'react';
import BikeCard from "../components/layout/BikeCard";

function MyVacancies() {
    const [vacancy, setVacancy] = useState(null);
    const userId = localStorage.getItem('userId');
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userVacancy = await getMyVacancy(userId);

                console.log(userVacancy);
                setVacancy(userVacancy);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [userId]);

    if (vacancy === null) {
        return <p>Loading...</p>;
    }

    const isVacancyEmpty = !vacancy.bikeRack && !vacancy.entryDate && !vacancy.attendant;

    return (
        <>
            <div className={styles.cards}>
                {isVacancyEmpty ? (
                    <p>Não há bicicletários cadastrados.</p>
                ) : (
                    <BikeCard
                        bikeRack={vacancy.bikeRack?.name}
                        railwayLine={vacancy.bikeRack?.railwayLine}
                        entryDate={vacancy.entryDate}
                        attendant={vacancy.attendant}
                    />
                )}
            </div>
        </>
    );
}

export default MyVacancies;