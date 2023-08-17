import { createContext, useEffect, useState } from "react";

export const InterfaceContext = createContext({} as any);

export const InterfaceStorage = ({ children }: any) => {
    const [openMenu, setOpenMenu] = useState(true);
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if(localStorage.getItem('theme')) {
            setTheme(localStorage.getItem('theme') as string);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme]);

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };
    
    return (
        <InterfaceContext.Provider value={{ openMenu, setOpenMenu, openMenuMobile, setOpenMenuMobile, showInput, setShowInput, theme, themeToggler }}>
            { children }
        </InterfaceContext.Provider>
    )
};
