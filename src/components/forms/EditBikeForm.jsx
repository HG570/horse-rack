import { useState, useEffect } from 'react';
import styles from './AddBikeForm.module.css';
import { updateBicycle } from '../../services/Bicycle';
import Loading from "../common/loading/Loading"
import { useNavigate } from 'react-router-dom';

function EditBikeForm({ step, bicycle }) {
    const [error, setError] = useState(null);
    const [bike, setBike] = useState()
    const [formData, setFormData] = useState({
        model: '',
        color: '',
        chassis: '',
        year: '',
        details: '',
    });
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    const years = Array.from({ length: currentYear - 1817 + 1 }, (_, i) => currentYear - i);
    const colors = {
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
    }

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setBike(bicycle);
                setFormData(prevState => ({
                    ...prevState,
                    model: bicycle.model || '',
                    color: bicycle.color || '',
                    chassis: bicycle.chassis || '',
                    year: bicycle.year || '',
                    details: bicycle.details || '',
                }));
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [bicycle]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'year' ? parseInt(value, 10) || '' : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateBicycle(bicycle.bicycleId, formData);
            alert('Bicicleta atualizada com sucesso!');
            setFormData({
                model: '',
                color: '',
                chassis: '',
                year: '',
                details: '',
            });
            setError(null);
            step(prev => prev - 2)
            navigate(0)
        } catch (error) {
            setError('Falha ao adicionar bicicleta. Tente novamente.');
            alert('Falha ao adicionar bicicleta. Tente novamente.');
        }
    };
    if (!bike) {
        return <Loading />;
    }

    return (
        <form className={styles.formBike} onSubmit={handleSubmit}>
            <article>
                <input
                    type="text"
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    maxLength="32"
                    required
                />
                <label className={styles.label} htmlFor="model">Modelo</label>
            </article>
            <article>
                <select
                    id="color"
                    name="color"
                    value={formData.color || ''}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Selecione uma cor</option>
                    {Object.entries(colors).map(([key, value]) => (
                        <option key={key} value={key}>{value}</option>
                    ))}
                </select>
                <label htmlFor="color">Cor</label>
            </article>
            <article>
                <input
                    type="text"
                    id="chassis"
                    name="chassis"
                    value={formData.chassis}
                    onChange={handleChange}
                    maxLength="17"
                    required
                />
                <label className={styles.label} htmlFor="chassis">Chassis</label>
            </article>
            <article>
                <select
                    id="year"
                    name="year"
                    value={formData.year  || ''}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Selecione uma ano</option>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <label className={styles.label} htmlFor="year">Ano</label>
            </article>
            <article>
                <input
                    type="text"
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    maxLength="255"
                    required
                />
                <label className={styles.label} htmlFor="details">Detalhes</label>
            </article>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Atualizar Bicicleta</button>
        </form>
    );
}

export default EditBikeForm;
