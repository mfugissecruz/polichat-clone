import { createContext, ReactElement, useContext, useEffect, useState, SetStateAction } from "react";

interface ThemeProps {
    children: ReactElement;
}

type ThemeType = {
    isDark: boolean;
    setIsDark: React.Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext({} as ThemeType);

export function ThemeProvider({ children }:ThemeProps){
    const [ isDark, setIsDark ] = useState(() => localStorage.theme === 'dark');

    useEffect(() => {
        const rootElement = window.document.documentElement;
        const currentTheme = isDark;

        const previousTheme = currentTheme ? 'light' : 'dark';
        rootElement.classList.remove(previousTheme);

        const nextTheme = currentTheme ? 'dark' : 'light';
        rootElement.classList.add(nextTheme);

        localStorage.setItem('theme', nextTheme);

    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            { children }
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);