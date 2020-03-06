import React, { useContext, useEffect, useState } from 'react'
import clienteContext from '../../context/clientes/clienteContext'

const Modalclientes = () => {

	const clientesContext = useContext(clienteContext)
	const { clienteseleccionado, crearCliente, actualizarCliente, limpiarCliente } = clientesContext

	const initialState = {
		nombre: '',
		direccion: '',
		rfc: ''
	}

	useEffect(() => {
		if (clienteseleccionado !== null) {
			guardarCliente(clienteseleccionado)
		} else {
			guardarCliente(initialState)
		}
		// eslint-disable-next-line
	}, [clienteseleccionado])

	const [clienteNuevo, guardarCliente] = useState(initialState)

	const { nombre, direccion, rfc } = clienteNuevo

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (clienteseleccionado === null) {
			crearCliente(clienteNuevo)
		} else {
			actualizarCliente(clienteNuevo)
			limpiarCliente()
		}

		// Reiniciar formulario
		guardarCliente(initialState)
	}

	const actualizar = e => {
		guardarCliente({
			...clienteNuevo,
			[e.target.name]: e.target.value
		})
	}
	
	return (
		<div className='modal fade' id='clienteModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
			<div className='modal-dialog' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Agregar cliente</h5>
						<button className='close' type='button' data-dismiss='modal' aria-label='Close'>
							<span aria-hidden='true'>×</span>
						</button>
					</div>
					<div className='modal-body'>
						<form id='form-clientes' className='user'>
							<div className='form-group row'>
								<div className='col-sm-12 mb-12 mb-sm-0'>
									<label htmlFor='nombreCliente'>Nombre completo</label>
									<input value={nombre} onChange={actualizar} name='nombre' required type='text' className='form-control' id='nombreCliente' />
								</div>
							</div>
							<div className='form-group row'>
								<div className='col-sm-12 mb-12 mb-sm-0'>
									<label htmlFor='Direccion'>Dirección</label>
									<input value={direccion} onChange={actualizar} type='text' className='form-control' name='direccion' />
								</div>
							</div>
							<div className='form-group row'>
								<div className='col-sm-12 mb-12 mb-sm-0'>
									<label htmlFor='rfc'>RFC</label>
									<input value={rfc} onChange={actualizar} type='text' className='form-control' name='rfc' />
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

export default Modalclientes
