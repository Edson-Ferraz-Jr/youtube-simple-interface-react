import { createContext, useState } from "react";

export const InterfaceContext = createContext({} as any);

export const InterfaceStorage = ({ children }: any) => {
    const [openMenu, setOpenMenu] = useState(true);

    return (
        <InterfaceContext.Provider value={{ openMenu, setOpenMenu }}>
            { children }
        </InterfaceContext.Provider>
    )
};
