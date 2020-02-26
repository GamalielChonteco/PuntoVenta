import React, { useContext, useEffect, useState } from 'react'

import impuestoContext from '../../context/impuestos/impuestoContext'

const ModalImpuesto = () => {

	const impuestosContext = useContext(impuestoContext)
	const { impuestoseleccionado, crearImpuesto, actualizarImpuesto, limpiarImpuesto } = impuestosContext

	const initialState = {
		nombre: '',
		valor: 0.0
	}

	useEffect(() => {
		if (impuestoseleccionado !== null) {
			guardarImpuesto(impuestoseleccionado)
		} else {
			guardarImpuesto(initialState)
		}
		// eslint-disable-next-line
	}, [impuestoseleccionado])

	const [impuestoNuevo, guardarImpuesto] = useState(initialState)

	const { nombre, valor } = impuestoNuevo

	const handleSubmit = e => {
		e.preventDefault()

		if (impuestoseleccionado === null) {
			crearImpuesto(impuestoNuevo)
		} else {
			actualizarImpuesto(impuestoNuevo)
			limpiarImpuesto()
		}

		// Reiniciar formulario
		guardarImpuesto(initialState)
	}

	const actualizar = e => {
		guardarImpuesto({
			...impuestoNuevo,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div className='modal fade' id='impuestoModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
			<div className='modal-dialog' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Agregar impuestos</h5>
						<button className='close' type='button' data-dismiss='modal' aria-label='Close'>
							<span aria-hidden='true'>×</span>
						</button>
					</div>
					<div className='modal-body'>
						<form id='form-impuesto' onSubmit={handleSubmit}>
							<div className='form-group row'>
								<div className='col-sm-12 mb-12 mb-sm-0'>
									<label htmlFor='nombreImpuesto'>Impuestos</label>
									<input onChange={actualizar} value={nombre} name='nombre' type='text' className='form-control' id='nombreImpuesto' />
								</div>
							</div>
							<div className='form-group row'>
								<div className='col-sm-12 mb-12 mb-sm-0'>
									<label htmlFor='valorImpuesto'>Valor</label>
									<input onChange={actualizar} value={valor} name='valor' type='number' className='form-control' id='valorImpuesto' />
								</div>
							</div>

							<div className='modal-footer'>
								<button className='btn btn-danger' type='button' data-dismiss='modal' onClick={limpiarImpuesto}>Cancelar</button>
								<button className='btn btn-primary' type='button' data-dismiss='modal' onClick={handleSubmit}>Guardar</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalImpuesto
