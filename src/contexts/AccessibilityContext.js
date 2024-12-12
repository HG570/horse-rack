import React, { createContext, useState, useEffect } from 'react';

export const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 'medium');

    useEffect(() => {
        document.body.classList.remove('light-theme', 'dark-theme', 'protanopia-theme');
        document.body.classList.add(`${theme}-theme`);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        document.body.classList.remove('small-font', 'medium-font', 'large-font');
        document.body.classList.add(`${fontSize}-font`);
        localStorage.setItem('fontSize', fontSize);
    }, [fontSize]);

    return (
        <AccessibilityContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
            {children}
        </AccessibilityContext.Provider>
    );
};
