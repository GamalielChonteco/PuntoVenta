import React, { useContext, useEffect, useState } from 'react'
import usuarioContext from '../../context/usuarios/usuarioContext'

const ModalUsuarios = () => {

	const usuariosContext = useContext(usuarioContext)
	const { usuarioseleccionado, crearUsuario, actualizarUsuario, limpiarUsuario } = usuariosContext

	const initialState = {
		nombre: '',
		tipo_usuario: 1,
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
						<form id='form-usuarios' className='user'>
							<div className='form-group row'>
								<div className='col-sm-12 mb-12 mb-sm-0'>
									<label htmlFor='nombreUsuario'>Nombre completo</label>
									<input value={nombre} onChange={actualizar} name='nombre' required type='text' className='form-control' id='nombreUsuario' />
								</div>
							</div>
							<div className='form-group row'>
								<div className='col-sm-12 mb-12 mb-sm-0'>
									<label htmlFor='nombreUsuario'>Nombre de usuario</label>
									<input type='text' className='form-control' />
								</div>
							</div>
							<div className='form-group row'>
								<div className='col-sm-12'>
									<label htmlFor='tipoUsuario'>Tipo usuario</label>
									<select value={tipo_usuario} onChange={actualizar} required name='tipoUsuario' id='tipoUsuario' className='form-control'>
										<option value='0'>Seleccione el tipo de usuario</option>
										<option value='1'>Supervisor</option>
										<option value='2'>Cajero</option>
										<option value='3'>Almacen</option>
									</select>
								</div>
							</div>
							<hr />
							Permisos de usuario
							<hr />
							<div className='form-group row'>
								<div className='col-sm-6 mb-3 mb-sm-0'>
									<div className='custom-control custom-checkbox'>
										<input className='custom-control-input' type='checkbox' name='insert_producto' id='insert_producto' />
										<label className='custom-control-label' htmlFor='insert_producto'>Agregar productos</label>
									</div>
								</div>
								<div className='col-sm-6 mb-3 mb-sm-0'>
									<div className='custom-control custom-checkbox'>
										<input className='custom-control-input' type='checkbox' name='update_producto' id='update_producto' />
										<label className='custom-control-label' htmlFor='update_producto'>Actualizar productos</label>
									</div>
								</div>
							</div>
							<div className='form-group row'>
								<div className='col-sm-6 mb-3 mb-sm-0'>
									<div className='custom-control custom-checkbox'>
										<input className='custom-control-input' type='checkbox' name='delete_producto' id='delete_producto' />
										<label className='custom-control-label' htmlFor='delete_producto'>Eliminar productos</label>
									</div>
								</div>
								<div className='col-sm-6 mb-3 mb-sm-0'>
									<div className='custom-control custom-checkbox'>
										<input className='custom-control-input' type='checkbox' name='agregar_linea' id='agregar_linea' />
										<label className='custom-control-label' htmlFor='agregar_linea'>Agregar lineas</label>
									</div>
								</div>
							</div>
							<div className='form-group row'>
								<div className='col-sm-6 mb-3 mb-sm-0'>
									<div className='custom-control custom-checkbox'>
										<input className='custom-control-input' type='checkbox' name='actualizar_linea' id='actualizar_linea' />
										<label className='custom-control-label' htmlFor='actualizar_linea'>Actualizar lineas</label>
									</div>
								</div>
								<div className='col-sm-6 mb-3 mb-sm-0'>
									<div className='custom-control custom-checkbox'>
										<input className='custom-control-input' type='checkbox' name='eliminar_linea' id='eliminar_linea' />
										<label className='custom-control-label' htmlFor='eliminar_linea'>Eliminar lineas</label>
									</div>
								</div>
							</div>
							<div className='form-group row'>
								<div className='col-sm-6 mb-3 mb-sm-0'>
									<div className='custom-control custom-checkbox'>
										<input className='custom-control-input' type='checkbox' name='realizar_corte' id='realizar_corte' />
										<label className='custom-control-label' htmlFor='realizar_corte'>Realizar corte</label>
									</div>
								</div>
								<div className='col-sm-6 mb-3 mb-sm-0'>
									<div className='custom-control custom-checkbox'>
										<input className='custom-control-input' type='checkbox' name='realizar_venta' id='realizar_venta' />
										<label className='custom-control-label' htmlFor='realizar_venta'>Realizar ventas</label>
									</div>
								</div>
							</div>
							<div className='modal-footer'>
								<button className='btn btn-danger' type='button' data-dismiss='modal'>Cancelar</button>
								<button className='btn btn-primary' type='button' onClick={handleSubmit} data-dismiss='modal'>Guardar</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalUsuarios
