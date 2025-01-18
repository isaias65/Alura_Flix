import React from "react";
import style from "./BotonForm.module.css";

export default function BotonForm({ children, type = "submit", onClick }) {
    // Determina la clase CSS según el tipo
    const buttonClass =
        type === "clear"
            ? `${style.botonFormulario} ${style.clearButton}`
            : `${style.botonFormulario} ${style.addButton}`;

    return (
        <button
            type={type === "clear" ? "button" : type} // Usar "button" para "clear"
            className={buttonClass}
            onClick={onClick} // Soporte para evento onClick
        >
            {children}
        </button>
    );
}
