import React from "react";
import style from "./TextareaForm.module.css";

export default function TextareaForm({
    name,
    labelChild,
    value,
    placeholder,
    onChange,
    estado, // Indica si hay error (true para error, false para correcto)
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
            <textarea
                id={name}
                name={name}
                value={value}
                placeholder={estado ? "Por favor ingrese un valor válido" : placeholder}
                className={`${style.textarea} ${modoEdicion ? style.textareaEdicion : ""} ${estado ? style.textareaError : ""}`}
                onChange={onChange}
            ></textarea>
        </div>
    );
}