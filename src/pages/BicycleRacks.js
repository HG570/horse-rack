import TrainLine from '../components/layout/TrainLine';
import styles from './BicycleRacks.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoRack from '../components/layout/InfoRack';
import Loading from '../components/common/loading/Loading';
import { fetchBikeRacks } from '../services/BikeStationApi';

function BicycleRacks() {
    let { id } = useParams();
    const [openRackInfo, setOpenRackInfo] = useState(false);
    const [rackInfoData, setRackInfoData] = useState({ trainLine: '', name: '', numberOfVacancies: '', maxNumberOfVacancies: '', lineColor: '' });
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

    const handleRackInfoOpen = (trainLine, name, numberOfVacancies, maxNumberOfVacancies, lineColor ) => {
        setRackInfoData({ trainLine, name, numberOfVacancies, maxNumberOfVacancies, lineColor });
        setOpenRackInfo(true);
    }
    
    return (
        <>
            <h1 className={styles.title}>Vagas</h1>
            <InfoRack
                infoOpen={openRackInfo} 
                handleRackInfoOpen={() => setOpenRackInfo(false)} 
                trainLine={rackInfoData.trainLine}
                lineColor={rackInfoData.lineColor}
                name={rackInfoData.name} 
                numberOfVacancies={rackInfoData.numberOfVacancies} 
                maxNumberOfVacancies={rackInfoData.maxNumberOfVacancies} 
            />
            <ul className={styles.container}>
                {trainLine.length > 0 && trainLine.map((trainLine) => (
                    <TrainLine 
                        key={trainLine.railwayLineId} 
                        name={trainLine.name}
                        lineColor={trainLine.color}
                        bikeRacks={trainLine.bikeRacks} 
                        handleRackInfoOpen={handleRackInfoOpen} 
                    />
                ))}
                {!removeLoading && <Loading />}
                {removeLoading && trainLine.length === 0 && (<p>Não há bicicletários cadastrados.</p>)}
            </ul>
        </>
    );
}

export default BicycleRacks;
