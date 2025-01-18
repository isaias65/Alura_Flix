import { Link } from "react-router-dom";
import styles from "./Link.module.css";
import React from "react";

export default function LinkCabecera({ url, children, estado, onClick }) {
    const buttonClass = estado ? styles.boton_activo : styles.boton_desactivado;

    return (
        <Link
            to={url}
            onClick={() => onClick()}
            className={`${styles.boton_base} ${buttonClass}`}
        >
            {children}
        </Link>
    );
}
