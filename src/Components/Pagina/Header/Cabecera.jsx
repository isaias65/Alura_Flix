import React, { useState } from "react";
import LinkCabecera from "../LinkCabecera/LinkCabecera";
import style from "./header.module.css";

export default function Cabecera() {
    const [estado, setEstado] = useState(true);
    const [menuAbierto, setMenuAbierto] = useState(false);

    const cambiarEstado = (estadoCambio) => {
        setEstado(estadoCambio);
        setMenuAbierto(false);
    };

    const toggleMenu = () => {
        setMenuAbierto((prev) => !prev);
    };

    return (
        <header className={style.header}>
            <img
                src="./img/Logo.png"
                className={style.header_logo}
                alt="Logo"
            />

            <button
                className={`${style.hamburger} ${menuAbierto ? "open" : ""}`}
                onClick={toggleMenu}
                aria-label="Abrir menú"
            >
                <i className={`bx ${menuAbierto ? "bx-x" : "bx-menu"}`}></i>
            </button>

            {/* Navegación */}
            <nav
                className={`${style.header_nav} ${
                    menuAbierto ? style.nav_active : ""
                }`}
            >
                <LinkCabecera
                    url={"./"}
                    estado={estado}
                    onClick={() => cambiarEstado(true)}
                >
                    HOME
                </LinkCabecera>

                <LinkCabecera
                    url={"./subirvideo"}
                    estado={!estado}
                    onClick={() => cambiarEstado(false)}
                >
                    NUEVO VIDEO
                </LinkCabecera>
            </nav>
        </header>
    );
}
