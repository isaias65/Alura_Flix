import React from "react";
import style from "./InputForm.module.css";

export default function InputForm({
    name,
    labelChild,
    type,
    value,
    placeholder,
    onChange,
    estado, // Indica si hay error (true para error, false para correcto)
    mensajeError, // Mensaje del placeholder en caso de error
    modoEdicion = false, // Propiedad para determinar si es edición
}) {
    return (
        <div className={style.container}>
            <label
                htmlFor={name}
                className={`${style.label} ${estado ? style.labelError : ""}`}
            >
                {labelChild}
            </label>
            <input
                className={`${style.input} ${modoEdicion ? style.inputEdicion : ""} ${estado ? style.inputError : ""}`}
                type={type}
                id={name}
                name={name}
                value={value}
                placeholder={estado ? mensajeError : placeholder}
                onChange={onChange}
            />
        </div>
    );
}