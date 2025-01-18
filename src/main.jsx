import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutesPrincipal from "./RoutesPrincipal";
import './app.css'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RoutesPrincipal></RoutesPrincipal>
    </StrictMode>
);
