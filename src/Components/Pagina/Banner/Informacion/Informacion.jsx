import React from "react";
import style from './Informacion.module.css'

export default function Informacion() {
    return (
        <article className={style.container}>
            <div className={style.botonBanner}>FRONT END</div>
            <div className={style.containerInfo}>
            <h1 className={style.titulo}>Challenge React</h1>
            <p className={style.descripcion}>
                Este challenge es una forma de aprendizaje. Es un mecanismo
                donde podrás comprometerte en la resolución de un problema para
                poder aplicar todos los conocimientos adquiridos en la formación
                React.
            </p>
            </div>
            
        </article>
    );
}
