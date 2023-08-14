import { createContext, useState } from "react";

export const InterfaceContext = createContext({} as any);

export const InterfaceStorage = ({ children }: any) => {
    const [openMenu, setOpenMenu] = useState(true);
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const [showInput, setShowInput] = useState(false);

    return (
        <InterfaceContext.Provider value={{ openMenu, setOpenMenu, openMenuMobile, setOpenMenuMobile, showInput, setShowInput }}>
            { children }
        </InterfaceContext.Provider>
    )
};
