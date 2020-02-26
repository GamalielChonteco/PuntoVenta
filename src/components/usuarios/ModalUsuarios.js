import React, { useContext, useEffect, useState } from 'react'
import usuarioContext from '../../context/usuarios/usuarioContext'

const ModalUsuarios = () => {

	const usuariosContext = useContext(usuarioContext)
	const { usuarioseleccionado, crearUsuario, actualizarUsuario, limpiarUsuario } = usuariosContext

	const initialState = {
		nombre: '',
		tipo_usuario: 0,
		username: ''
	}

	useEffect(() => {
        if (usuarioseleccionado !== null) {
            guardarUsuario(usuarioseleccionado)
        } else {
            guardarUsuario(initialState)
        }
        // eslint-disable-next-line
    }, [usuarioseleccionado])

	const [usuarioNuevo, guardarUsuario] = useState(initialState)
	
	const { nombre, tipo_usuario } = usuarioNuevo

	const handleSubmit = async (e) => {
        e.preventDefault()

        if (usuarioseleccionado === null) {
            crearUsuario(usuarioNuevo)
        } else {
            actualizarUsuario(usuarioNuevo)
            limpiarUsuario()
        }
        
        // Reiniciar formulario
        guardarUsuario(initialState)
    }

    const actualizar = e => {
        guardarUsuario({
            ...usuarioNuevo,
            [e.target.name]: e.target.value
        })
    }
	
	return (
		<div className='modal fade' id='usuarioModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
			<div className='modal-dialog' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Agregar usuario</h5>
						<button className='close' type='button' data-dismiss='modal' aria-label='Close'>
							<span aria-hidden='true'>×</span>
						</button>
					</div>
					<div className='modal-body'>
						<form id='form-usuarios'>
							<div className='form-group row'>
								<div className='col-sm-12 mb-12 mb-sm-0'>
									<label htmlFor='nombreUsuario'>Nombre</label>
									<input value={nombre} onChange={actualizar} name='nombre' required type='text' className='form-control' id='nombreUsuario' />
								</div>
							</div>
							<div className='form-group row'>
								<div className='col-sm-12'>
									<label htmlFor='tipoUsuario'>Tipo usuario</label>
									<select value={tipo_usuario} onChange={actualizar} required name='tipoUsuario' id='tipoUsuario' className='form-control'>
										<option value=''>Seleccione el tipo de usuario</option>
										<option value='1'>Administrador</option>
										<option value='2'>Cajero</option>
										<option value='3'>Inventario</option>
									</select>
								</div>
							</div>
							<div className='modal-footer'>
								<button className='btn btn-danger' type='button' data-dismiss='modal'>Cancelar</button>
								<button className='btn btn-success' type='button' onClick={handleSubmit} data-dismiss='modal'>Guardar</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalUsuarios
