import React from "react";
import "./Categorias.css";
import Card from "../Card/Card";

export default function Categorias(props) {
    const { value, color } = props.datos
    const { datosVideos, eliminarVideo } = props

    return (
        <>
            {datosVideos.length > 0 && (
                <div className="container__listCard">
                    <div
                        className="listCard__title"
                        style={{ backgroundColor: color }}
                    >
                        <h2 style={{fontSize: "1.5rem"}}>{value}</h2>
                    </div>
                    <div className="listCard__card">
                        {datosVideos.map((video) => {
                            return (
                                <Card
                                    datos={video}
                                    key={video.id}
                                    color={color}
                                    eliminarVideo={eliminarVideo}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}
