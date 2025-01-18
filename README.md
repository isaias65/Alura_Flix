# Challenge Aluraflix

Aluraflix es una plataforma creada para gestionar videos, permitiendo funcionalidades como listar, registrar, actualizar y eliminar videos. Este proyecto fue desarrollado con **React** utilizando **JavaScript** y tiene como objetivo ayudarte a poner en práctica y reforzar conocimientos en esta poderosa librería frontend.

## Tecnologías utilizadas

- **React**: Para la creación de componentes y gestión de la interfaz.
- **JavaScript**: Lenguaje principal del proyecto.
- **Hooks de React**: Para gestionar estado y efectos de manera eficiente.
- **React Router**: Para implementar navegación entre rutas.
- **JSON Server**: Para simular una API REST y gestionar los datos de los videos.

## Características principales

- **Listado de videos**: Visualiza una lista de todos los videos disponibles.
- **Registro de videos**: Agrega nuevos videos proporcionando información como título, descripción, imagen y URL de video.
- **Actualización de videos**: Edita la información de videos existentes.
- **Eliminación de videos**: Borra videos que ya no son necesarios.

## Objetivos de aprendizaje

Este proyecto está diseñado para que puedas:

- Aprender y practicar la **componentización** en React.
- Entender el uso y la implementación de **hooks** como `useState` y `useEffect`.
- Consumir una API REST utilizando **fetch** o librerías como Axios.
- Configurar y utilizar rutas con **React Router**.
- Manejar un servidor JSON local con **JSON Server** para simular datos.

## Instalación y configuración

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/isaias65/Alura_Flix.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd Alura_Flix
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

4. Inicia el servidor JSON:
   ```bash
   json-server --watch src/data/db.json --port 3001
   ```

5. Inicia la aplicación React:
   ```bash
   npm start
   ```

La aplicación estará disponible en [http://localhost:3001](http://localhost:3001).

