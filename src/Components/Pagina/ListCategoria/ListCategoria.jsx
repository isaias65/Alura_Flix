import React, { useEffect, useState } from "react";
import "./ListCategoria.css";
import Categorias from "../Categorias/Categorias";
import { showConfirmationDialog, showSuccessMessage } from "../../../utils/Alert/Alert";
import { buscar, eliminar } from "../../../api/api";

export default function ListCategoria() {
    const [categorias, setCategorias] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        buscar("/categories", setCategorias);
    }, [categorias]);

    useEffect(() => {
        buscar("/videos", setVideos);
    }, [videos]);

    const eliminarVideo = async (id) => {
        const confirmado = await showConfirmationDialog(
            "¿Estás seguro?",
            "No podrás recuperar este video una vez eliminado."
        );

        if (confirmado) {
            const resultado = await eliminar("/videos", id);
            if (resultado.success) {
                setVideos((prevVideos) =>
                    prevVideos.filter((video) => video.id !== id)
                );
                showSuccessMessage("¡Eliminado!", resultado.mensaje);
            } else {
                showErrorMessage("Error", resultado.mensaje);
            }
        }
    };

    return (
        <section className="main__listCard">
            <div className="container">
                {categorias.map((categoria) => {
                    return (
                        <Categorias
                            datos={categoria}
                            key={categoria.id}
                            datosVideos={videos.filter(
                                (videos) => videos.categoria === categoria.id
                            )}
                            eliminarVideo={eliminarVideo}
                        />
                    );
                })}
            </div>
        </section>
    );
}
