import Swal from 'sweetalert2';
import axios from 'axios';

export function mostrarAlerta(titulo, icono, foco = '') {
    if (foco != '') {
        document.getElementById(foco).focus();
    }

    Swal.fire({
        title: titulo,
        icon: icono,
        customClass: { confirmButton: 'btn btn-primary' },
        buttonsStyling: false
    });
}

export function confirmar(url, id, titulo, mensaje) {
    var url = url + id;
    const swalBootstrapBtn = Swal.mixin({
        customClass: { confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger' },
    });
    swalBootstrapBtn.fire({
        title: titulo,
        text: mensaje,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fa-solid fa-check"></i> Si, eliminar',
        cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar'
    }).then((res) => {
        if (res.isConfirmed) {
            enviarSolicitud('DELETE', { id: id }, url, 'Eliminado con éxito');
        } else {
            mostrarAlerta('Operacion cancelada', 'info');
        }
    });
}

export function enviarSolicitud(metodo, parametros, url, mensaje) {
    axios({ method: metodo, url: url, data: parametros }).then(function (res) {
        var estado = res.status;
        if (estado == '200') {
            mostrarAlerta(mensaje, 'success');
            window.setTimeout(function () {
                window.location.href = '/';
            }, 1000);
        } else {
            mostrarAlerta('El servidor no responde', 'error');
        }
    }).catch(function (error) {
        mostrarAlerta('Error de servidor', 'error');
    });
}