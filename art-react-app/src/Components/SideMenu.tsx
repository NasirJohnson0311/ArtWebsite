// src/Components/SideMenu.tsx
import React from "react"
import { Offcanvas } from "react-bootstrap"
import { useMenu } from "../Context/MenuContext"

type SideMenuProps = {
    isOpen: boolean
}

export function SideMenu({ isOpen }: SideMenuProps) {
    const { closeMenu } = useMenu()

    return (
        <Offcanvas show={isOpen} onHide={closeMenu} placement="start">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {/* Add content here later */}
            </Offcanvas.Body>
        </Offcanvas>
    )
}
