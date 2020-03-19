import React, { Fragment, useContext, useEffect } from 'react'

import impuestoContext from '../../context/impuestos/impuestoContext'

import ModalDialog from '../ModalDialog'

const TablaImpuesto = () => {

	// Extraer impuestos del state
	const impuestosContext = useContext(impuestoContext)
	const { impuestos, impuestoseleccionado, obtenerImpuestos, seleccionarImpuesto, eliminarImpuesto } = impuestosContext

	// Cargar impuestos
	useEffect(() => {
		obtenerImpuestos()
		// eslint-disable-next-line
	}, [])

	if (impuestos.length === 0) return <div></div>

	return (
		<Fragment>
			<table className='table table-bordered' id='dataTable' cellSpacing='0'>
				<thead>
					<tr>
						<th>Impuesto</th>
						<th>Valor</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{impuestos.map(impuesto => (
						<tr key={impuesto.id}>
							<td>{impuesto.nombre}</td>
							<td>{impuesto.valor}</td>
							<td>
							<button className='btn-primary btn' to='#' data-toggle='modal'
									data-target='#impuestoModal' 
									onClick={() => seleccionarImpuesto(impuesto)}
							><i className='fas fa-pen fa-lg'
										style={{ float: 'right' }} title='Editar Impuesto'></i></button>

								<button className='btn-danger btn' to='#' data-toggle='modal' data-target='#modalEliminarImpuesto'
									onClick={() => seleccionarImpuesto(impuesto)}
								><i className='fas fa-trash fa-lg'
									style={{ float: 'right' }} title='Eliminar Impuesto'></i></button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<ModalDialog
                idModal='modalEliminarImpuesto'
                text='Al realizar está acción el impuesto se eliminará permanentemente. ¿Desea continuar?'
                accion={() => eliminarImpuesto(impuestoseleccionado.id)}
            />
		</Fragment>
	)
}

export default TablaImpuesto
