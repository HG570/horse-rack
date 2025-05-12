import { useState } from 'react';
import styles from './AddBikeForm.module.css';
import { addBicycle } from '../../services/Bicycle';
import { useNavigate } from 'react-router-dom';

function AddBikeForm({ step }) {
    const [error, setError] = useState(null);
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
            await addBicycle(formData);
            alert('Bicicleta adicionada com sucesso!');
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
                    value={null}
                    onChange={handleChange}
                    required
                >
                    <option value="black" disabled>Selecione uma cor</option>
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
                    value={null}
                    onChange={handleChange}
                    required
                >
                    <option value={`${currentYear}`} disabled>Selecione uma ano</option>
                    {years.map(year => (
                        <option key={year} value={`${year}`}>{year}</option>
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
                />
                <label className={styles.label} htmlFor="details">Detalhes</label>
            </article>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Adicionar Bicicleta</button>
        </form>
    );
}

export default AddBikeForm;
