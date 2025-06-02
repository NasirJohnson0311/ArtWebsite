// src/Context/MenuContext.tsx
import React, { createContext, useContext, ReactNode, useState } from "react"
import { SideMenu } from "../Components/SideMenu"

type MenuProviderProps = {
    children: ReactNode
}

type MenuContext = {
    openMenu: () => void
    closeMenu: () => void
}

const MenuContext = createContext({} as MenuContext)

export function useMenu() {
    return useContext(MenuContext)
}

export function MenuProvider({ children }: MenuProviderProps) {
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => setIsOpen(true)
    const closeMenu = () => setIsOpen(false)

    return (
        <MenuContext.Provider value={{ openMenu, closeMenu }}>
            {children}
            <SideMenu isOpen={isOpen} />
        </MenuContext.Provider>
    )
}
