import { createContext, useState } from "react";

export const InterfaceContext = createContext({} as any);

export const InterfaceStorage = ({ children }: any) => {
    const [openMenu, setOpenMenu] = useState(true);
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };
    
    return (
        <InterfaceContext.Provider value={{ openMenu, setOpenMenu, openMenuMobile, setOpenMenuMobile, showInput, setShowInput, theme, themeToggler }}>
            { children }
        </InterfaceContext.Provider>
    )
};
