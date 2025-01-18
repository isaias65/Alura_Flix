import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaBase from "./Pages/PaginaBase/PaginaBase";
import SubirVideo from "./Pages/SubirVideo/SubirVideo";
import Inicio from "./Pages/Inicio/Inicio";

export default function RoutesPrincipal() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="subirvideo" element={<SubirVideo />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
