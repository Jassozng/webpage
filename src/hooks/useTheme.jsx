import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import SunIcon from '../components/icons/Sun';
import MoonIcon from '../components/icons/Moon';

const THEME = Object.freeze({
    LIGHT: "light",
    DARK: "dark",
});

const useTheme = () => {
    const { DARK, LIGHT } = THEME;
    const [theme, setTheme] = useState(null);
    
    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if(localTheme) {
            const firstTheme = localTheme === DARK ? DARK : LIGHT
            setTheme(firstTheme);
            return;
        }

        const prefersDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDarkTheme ? DARK : LIGHT);
    }, []);

    useEffect(() => {
        const isDarkTheme = theme === DARK;

        document.documentElement.classList[isDarkTheme ? "add" : "remove"](DARK);
        localStorage.setItem("theme", isDarkTheme ? DARK : LIGHT);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === LIGHT ? DARK : LIGHT);
    }

    const ThemeSwitch = () => {
        return (
            <Button 
                radius="full" 
                variant="flat"
                name="theme-switch" 
                color={theme === DARK ? "primary" : "foreground"}
                startContent={!theme ? null : theme === DARK ? <MoonIcon /> : <SunIcon />} 
                onPress={() => toggleTheme()}
                isIconOnly
            />
        );
    };

  return {
    theme: theme,
    toggleTheme: toggleTheme,
    ThemeSwitch: () => <ThemeSwitch />,
  }

};

export default useTheme;