import styles from "./MyVacancies.module.css"
import { getMyVacancy } from "./../services/MyVacancy"
import { useEffect, useState } from 'react';
import VacancyDetailCard from "../components/layout/VacancyDetailCard";
import Loading from "../components/common/loading/Loading"

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
        return <Loading/>;
    }

    const isVacancyEmpty = !vacancy.bikeRack && !vacancy.entryDate && !vacancy.attendant;

    return (
        <>
            <div className={styles.cards}>
                {isVacancyEmpty ? (
                    <div>
                        <p>Não há vagas ocupadas no momento.</p>
                    </div>
                ) : (
                    <VacancyDetailCard
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