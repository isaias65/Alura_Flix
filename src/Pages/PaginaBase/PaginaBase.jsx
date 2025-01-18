import React from "react";
import Cabecera from "../../Components/Pagina/Header/Cabecera";
import style from "./PaginaBase.module.css";
import Footer from "../../Components/Pagina/Footer/Footer";
import Container from "../../Components/Pagina/Container/Container";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
    return (
        <main className={style.container}>
            <Cabecera></Cabecera>
            <Container>
                <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </main>
    );
}
