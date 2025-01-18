import React from "react";
import style from "./Publicidad.module.css";

export default function Publicidad() {
    return (
        <article className={style.container}>
            <img
                src="./img/Publicidad.png"
                className={style.img}
                alt="Publicidad"
            />
        </article>
    );
}
