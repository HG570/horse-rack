import styles from './BikeCard.module.css'
import { HiOutlinePencilSquare, HiTrash } from "react-icons/hi2";
import { deleteBicycle } from '../../services/Bicycle'
import { useNavigate } from 'react-router-dom';

function BikeCard({ bicycleId, model, color, chassis, year, details, step, bicycle }) {

    const navigate = useNavigate();
    const deleteMyBike = () => {
        deleteBicycle(bicycleId);
        navigate(0);
    }
        const colorMap = {
            black: "Preto",
            white: "Branco",
            gray: "Cinza",
            yellow: "Amarelo",
            blue: "Azul",
            green: "Verde",
            red: "Vermelho",
            orange: "Laranja",
            brown: "Marrom",
            purple: "Roxo",
            pink: "Rosa"
        };
        const bikeColor = colorMap[color] || "Cor não encontrada";
    return (
        <div className={styles.card}>
            <div className={styles.title} style={{backgroundColor: `var(--bike-${color})`, color: ['white', 'yellow'].includes(color) ? 'var(--dark-gray)' : 'var(--white)'}}>
                <div className={styles.model}>
                {model}
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button}  onClick={() => {
                        bicycle({
                            bicycleId,
                            model,
                            color,
                            chassis,
                            year,
                            details
                        });
                        step(prev => prev + 2);
                    }}><HiOutlinePencilSquare style={{color: ['white', 'yellow'].includes(color) ? 'var(--dark-gray)' : 'var(--white)'}}/></button>
                    <button className={styles.button}  onClick={deleteMyBike}><HiTrash style={{color: ['white', 'yellow'].includes(color) ? 'var(--dark-gray)' : 'var(--white)'}}/></button>
                </div>
            </div>
            <div className={styles.content}>Chassis <p className={styles.data}>{chassis}</p></div>
            <div className={styles.content}>Cor <p className={styles.data}>{bikeColor}</p></div>
            <div className={styles.content}>Ano <p className={styles.data}>{year}</p></div>
            <div className={styles.detail}>Detalhes<div className={`${styles.data} ${styles.detailsData}`}>{details}</div></div>
        </div>
    )
}

export default BikeCard;