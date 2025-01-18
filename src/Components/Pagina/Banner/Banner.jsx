import React from "react";
import Informacion from "./Informacion/Informacion";
import Publicidad from "./Publicidad/Publicidad";
import styles from "./Banner.module.css";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <Informacion></Informacion>
            <Publicidad className={styles.publicidadOculta} />
        </section>
    );
}
