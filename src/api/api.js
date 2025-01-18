import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:3001" });

export const buscar = async (url, setDado) => {
    const respuesta = await api.get(url);
    setDado(respuesta.data);
};

export const registro = async (url, datos) => {
    try {
        const respuesta = await api.post(url, datos);

        if (respuesta.status === 200) {
            return { mensaje: "Video registrado correctamente" };
        } else {
            return { mensaje: "Hubo un problema al registrar el video" };
        }
    } catch (error) {
        console.error("Error al enviar los datos:", error);
        return { mensaje: "Error al registrar el video" };
    }
};

export const editar = async (url, id, datos) => {
    try {
        const respuesta = await api.put(`${url}/${id}`, datos);

        if (respuesta.status === 200) {
            return { mensaje: "Video editado correctamente", success: true };
        } else {
            return {
                mensaje: "Hubo un problema al editar el video",
                success: false,
            };
        }
    } catch (error) {
        console.error("Error al editar los datos:", error);
        return {
            mensaje: `Error al editar el video: ${error.message}`,
            success: false,
        };
    }
};
export const eliminar = async (url, id) => {
    try {
        const respuesta = await api.delete(`${url}/${id}`);

        if (respuesta.status === 200) {
            return { mensaje: "Video eliminado correctamente", success: true };
        } else {
            return {
                mensaje: "Hubo un problema al eliminar el video",
                success: false,
            };
        }
    } catch (error) {
        console.error("Error al eliminar el video:", error);
        return {
            mensaje: `Error al eliminar el video: ${error.message}`,
            success: false,
        };
    }
};
