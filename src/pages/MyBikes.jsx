import styles from "./MyBikes.module.css"
import { getBicycles } from "./../services/Bicycle"
import { useEffect, useState } from 'react';
import BikeCard from "../components/layout/BikeCard";
import Loading from "../components/common/loading/Loading"
import AddBikeForm from "../components/forms/AddBikeForm"
import EditBikeForm from "../components/forms/EditBikeForm"

function MyBikes() {
    const [currentStep, setCurrentStep] = useState(1);
    const [bikeId, setBikeId] = useState(null);
    const [bicycles, setBicycles] = useState(null);
    const [bicycle, setBicycle] = useState({
        model: '',
        color: '',
        chassis: '',
        year: '',
        details: '',
    });
    const userId = localStorage.getItem('userId');
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userBicycle = await getBicycles(userId);
                setBicycles(userBicycle);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [userId]);

    if (bicycles === null) {
        return <Loading />;
    }

    const goToNextStep = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const goBackPreviousStep = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    return (
        <>
            {currentStep === 1 && (
                <div className={styles.form}>
                    <button type="button" className={styles.button} onClick={goToNextStep}>Adicionar Bicicleta</button>
                    <div className={styles.cards}>
                        {!bicycles ? (
                            <p>Não foram encontradas bicicletas cadastradas.</p>
                        ) : bicycles.map(bicycle => (
                            <BikeCard
                                key={bicycle.bicycleId}
                                bicycleId={bicycle.bicycleId}
                                model={bicycle.model}
                                color={bicycle.color}
                                chassis={bicycle.chassis}
                                year={bicycle.year}
                                details={bicycle.details}
                                step={setCurrentStep}
                                bicycle={setBicycle}
                            />
                        )
                        )}
                    </div>
                </div>
            )}
            {currentStep === 2 && (
                <div className={styles.form}>
                    <AddBikeForm step={setCurrentStep} />
                    <button type="button" className={styles.button} onClick={goBackPreviousStep}>Ver Bicicletas</button>
                </div>

            )}
            {currentStep === 3 && (
                <div className={styles.form}>
                    <EditBikeForm step={setCurrentStep} bicycle={bicycle} />
                    <button type="button" className={styles.button} onClick={() => {
                        setCurrentStep(prevStep => prevStep - 2);
                    }}>Ver Bicicletas</button>
                </div>
            )}
        </>
    );
}

export default MyBikes;