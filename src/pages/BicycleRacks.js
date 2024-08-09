import TrainLine from '../components/layout/TrainLine';
import styles from './BicycleRacks.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QRCodeVacancy from '../components/layout/QRCodeVacancy';
import Loading from '../components/common/loading/Loading';
import { fetchBikeRacks } from '../services/bikeStationApi';

function BicycleRacks() {
    let { id } = useParams();
    const [openQRCode, setOpenQRCode] = useState(false);
    const [qrCodeData, setQrCodeData] = useState({ trainLine: '', name: '', numberOfVacancies: '', maxNumberOfVacancies: '' });
    const [trainLine, setTrainLine] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bikeRacks = await fetchBikeRacks();
                const trainLinesWithBikeRacks = bikeRacks.reduce((acc, bikeRack) => {
                    const { railwayLine } = bikeRack;
                    if (!acc[railwayLine.railwayLineId]) {
                        acc[railwayLine.railwayLineId] = { 
                            ...railwayLine, 
                            bikeRacks: []
                        };
                    }
                    acc[railwayLine.railwayLineId].bikeRacks.push(bikeRack);
                    return acc;
                }, {});
                setTrainLine(Object.values(trainLinesWithBikeRacks));
                setRemoveLoading(true);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setRemoveLoading(true);
            }
        };
        fetchData();
    }, [id]);

    const handleQRCodeOpen = (trainLine, name, numberOfVacancies, maxNumberOfVacancies) => {
        setQrCodeData({ trainLine, name, numberOfVacancies, maxNumberOfVacancies });
        setOpenQRCode(true);
    };

    return (
        <>
            <h1 className={styles.title}>Vagas</h1>
            <QRCodeVacancy 
                isOpen={openQRCode} 
                setQRCodeOpen={() => setOpenQRCode(false)} 
                trainLine={qrCodeData.trainLine} 
                name={qrCodeData.name} 
                numberOfVacancies={qrCodeData.numberOfVacancies} 
                maxNumberOfVacancies={qrCodeData.maxNumberOfVacancies} 
            />
            <ul className={styles.container}>
                {trainLine.length > 0 && trainLine.map((trainLine) => (
                    <TrainLine 
                        key={trainLine.railwayLineId} 
                        name={trainLine.name} 
                        bikeRacks={trainLine.bikeRacks} 
                        handleQRCodeOpen={handleQRCodeOpen} 
                    />
                ))}
                {!removeLoading && <Loading />}
                {removeLoading && trainLine.length === 0 && (<p>Não há bicicletários cadastrados.</p>)}
            </ul>
        </>
    );
}

export default BicycleRacks;
