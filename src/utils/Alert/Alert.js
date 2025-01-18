import Swal from 'sweetalert2';

/**
 * Muestra un mensaje de éxito genérico.
 * @param {string} title - Título del mensaje.
 * @param {string} text - Texto adicional para detallar el mensaje.
 */
export const showSuccessMessage = (title, text) => {
    Swal.fire({
        icon: 'success',
        title: title || '¡Éxito!',
        text: text || 'La operación se completó correctamente.',
        confirmButtonText: 'Aceptar',
    });
};
/**
 * Muestra un mensaje de error genérico.
 * @param {string} title - Título del mensaje.
 * @param {string} text - Texto adicional para detallar el mensaje.
 */
export const showErrorMessage = (title, text) => {
    Swal.fire({
        icon: 'error',
        title: title || '¡Error!',
        text: text || 'Ocurrió un problema al realizar la operación.',
        confirmButtonText: 'Aceptar',
    });
};

/**
 * Muestra un mensaje de advertencia genérico.
 * @param {string} title - Título del mensaje.
 * @param {string} text - Texto adicional para detallar el mensaje.
 */
export const showWarningMessage = (title, text) => {
    Swal.fire({
        icon: 'warning',
        title: title || 'Advertencia',
        text: text || 'Por favor, revise la información antes de continuar.',
        confirmButtonText: 'Aceptar',
    });
};

/**
 * Muestra un cuadro de confirmación con SweetAlert2.
 * @param {string} title - Título del mensaje.
 * @param {string} text - Texto adicional para detallar la confirmación.
 * @returns {Promise<boolean>} - Resuelve a `true` si el usuario confirma, `false` si cancela.
 */
export const showConfirmationDialog = (title, text) => {
    return Swal.fire({
        title: title || '¿Estás seguro?',
        text: text || 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, continuar',
        cancelButtonText: 'Cancelar',
    }).then((result) => result.isConfirmed);
};