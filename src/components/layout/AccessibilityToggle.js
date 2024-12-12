// ThemeToggle.js
import React, { useContext } from 'react';
import { AccessibilityContext } from '../../contexts/AccessibilityContext';
import styles from './AccessibilityToggle.module.css';
import { HiChevronDown } from 'react-icons/hi2';

const AccessibilityToggle = () => {
    const { theme, setTheme, fontSize, setFontSize } = useContext(AccessibilityContext);

    const handleThemeChange = (event) => setTheme(event.target.value);
    const handleFontSizeChange = (event) => setFontSize(event.target.value);

    return (
        <div className={styles.container}>
            <div className={styles.adjust}>
                <label htmlFor="theme-select">Escolha o tema:</label>
                <div className={styles.selectInput}>
                    <select id="theme-select" value={theme} onChange={handleThemeChange} className={styles.select}>
                        <option value="light">Modo Claro</option>
                        <option value="dark">Modo Escuro</option>
                    </select>
                    <div className={styles.selectButton}>
                        <HiChevronDown />
                    </div>
                </div>
            </div>

            <div className={styles.adjust}>
                <label htmlFor="font-size-select">Tamanho da Fonte:</label>
                <div className={styles.selectInput}>
                    <select id="font-size-select" value={fontSize} onChange={handleFontSizeChange} className={styles.select}>
                        <option value="small">Pequeno</option>
                        <option value="medium">Médio</option>
                        <option value="large">Grande</option>
                    </select>
                    <div className={styles.selectButton}>
                        <HiChevronDown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccessibilityToggle;
