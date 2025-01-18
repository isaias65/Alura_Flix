import React, { useState } from "react";
import "./Card.css";
import ModalEditarVideo from "../../Modal/EditarVideo/ModalEditarVideo";

export default function Card(props) {
    const { imagen, id, titulo, categoria,video,descripcion } = props.datos;
    const { color, eliminarVideo } = props;
    const [modalVisible, setModalVisible] = useState(false);

    const videoData = {
        id, 
        titulo,
        categoria,
        imagen,
        video,
        descripcion
    };

    const abrirModal = () => {
        setModalVisible(true);
    };

    // Función para cerrar el modal
    const cerrarModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <article className="card" style={{ border: `5px solid ${color}` }}>
                <div
                    className="card__video"
                    style={{
                        borderBottom: `5px solid ${color}`,
                        boxShadow: `inset 0 0 30px ${color}`,
                    }}
                >
                    <img src={imagen} alt="imagen del video" />
                </div>
                <div className="card__info">
                    <div
                        onClick={() => eliminarVideo(id)}
                        className="info__button"
                    >
                        <img src="./img/icon_borrar.png" alt="icon de borrar" />
                        <span>BORRAR</span>
                    </div>
                    <div className="info__button" onClick={abrirModal}>
                        <img src="./img/icon_editar.png" alt="icon de editar" />
                        <span>EDITAR</span>
                    </div>
                </div>
            </article>
            <ModalEditarVideo
                isVisible={modalVisible}
                onClose={cerrarModal}
                dataToEdit={videoData}
            />
        </>
    );
}
