import React from "react";
import style from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={style.container_footer}>
            <img src="./img/Logo.png" className={style.footer_img} />
        </footer>
    );
}
