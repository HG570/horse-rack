import TrainLine from '../components/layout/TrainLine';
import styles from './Paracycles.module.css'
import InfoRack from '../components/layout/InfoRack';
import { useState } from 'react';

function Paracycles() {
    const [openRackInfo, setOpenRackInfo] = useState(false);
    const [rackInfoData, setRackInfoData] = useState({ trainLine: '', name: '', numberOfVacancies: '', maxNumberOfVacancies: '', lineColor: '' });

    const trainLineData = {
        name: "Linha 12 - Safira",
        lineColor: "#1C146B",
        bikeRacks: [
            { bikeRackId: 1, name: "São Miguel Paulista", availableVacancies: 33, maxNumberOfVacancies:33},
        ]
    };

    const handleRackInfoOpen = (trainLine, name, numberOfVacancies, maxNumberOfVacancies, lineColor ) => {
        setRackInfoData({ trainLine, name, numberOfVacancies, maxNumberOfVacancies, lineColor });
        setOpenRackInfo(true);
    }

    return (
        <>
            <InfoRack
                    infoOpen={openRackInfo} 
                    handleRackInfoOpen={() => setOpenRackInfo(false)} 
                    trainLine={rackInfoData.trainLine}
                    lineColor={rackInfoData.lineColor}
                    name={rackInfoData.name} 
                    numberOfVacancies={rackInfoData.numberOfVacancies} 
                    maxNumberOfVacancies={rackInfoData.numberOfVacancies} 
            />
            <p className={styles.text}>Permitem estacionar a bicicleta próximo à estação. O espaço é aberto e não há monitoramento do local, portanto a utilização ocorre por conta da responsabilidade do próprio ciclista.</p>
            <ul className={styles.container}>
                <TrainLine name={trainLineData.name} bikeRacks={trainLineData.bikeRacks} lineColor={trainLineData.lineColor} handleRackInfoOpen={(handleRackInfoOpen)}></TrainLine>
            </ul>
        </>
    )
}
export default Paracycles;