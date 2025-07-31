import { createContext, useState, useEffect } from 'react';
import './Theme.css';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

    useEffect(() => {
        localStorage.setItem("theme", theme);

        document.body.classList.remove("light-mode", "dark-mode");
        document.body.classList.add(`${theme}-mode`);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};