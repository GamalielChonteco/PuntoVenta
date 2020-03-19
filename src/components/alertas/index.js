import Swal from 'sweetalert2'

// Toast de alerta
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500
})

export function alertaSesion() {
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'El usuario o la contraseña son incorrectos',
        showConfirmButton: false,
        timer: 1500
    })
}

export function alerta(text) {
    Toast.fire({
        icon: 'success',
        text
    })
}

export function alertaError() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error, intentelo más tarde',
        showConfirmButton: false,
        timer: 1500
    })
}