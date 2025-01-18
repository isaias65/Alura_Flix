import React, { useState, useEffect } from "react";
import style from "./SelectForm.module.css";
import { buscar } from "../../../api/api";

export default function SelectForm({
    name,
    labelChild,
    value,
    onChange,
    estado, // Indica si hay error (true para error, false para correcto)
    modoEdicion = false, // Propiedad para determinar si es edición
}) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        buscar(`/categories`, setOptions);
    }, []);

    return (
        <div className={style.inputContainer}>
            <label
                htmlFor={name}
                className={`${style.label} ${estado ? style.labelError : ""}`}
            >
                {labelChild}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                className={`${style.input} ${
                    modoEdicion ? style.inputEdicion : ""
                } ${estado ? style.inputError : ""}`}
                onChange={onChange}
            >
                <option value="" disabled>
                    {estado
                        ? "Seleccione una opción válida"
                        : "Seleccione una categoría"}
                </option>
                {options.map((option) => (
                    <option
                        key={option.id}
                        value={option.id}
                        className={style.option}
                    >
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    );
}
