import React, { Fragment, useContext, useEffect } from 'react'

import lineaContext from '../../context/lineas/lineaContext'

import ModalDialog from '../ModalDialog'

const TablaLinea = () => {

	// Extraer lineas del state
	const lineasContext = useContext(lineaContext)
	const { lineas, lineaseleccionada, obtenerLineas, seleccionarLinea, eliminarLinea } = lineasContext

	// Obtener lineas cuando carga el componente
	useEffect(() => {
		obtenerLineas()
		// eslint-disable-next-line
	}, [])

	if (lineas.length === 0) return <div></div>

	return (
		<Fragment>
			<table className='table table-bordered' id='dataTable' cellSpacing='0'>
				<thead>
					<tr>
						<th>Linea</th>
						<th>Descripcion</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{lineas.map(linea => (
						<tr key={linea.id}>
							<td>{linea.nombre}</td>
							<td>{linea.descripcion}</td>
							<td>
								<button className='btn-primary btn' to='#' data-toggle='modal'
									data-target='#lineaModal' 
									onClick={() => seleccionarLinea(linea)}
								><i className='fas fa-pen fa-lg'
										style={{ float: 'right' }} title='Editar linea'></i></button>

								<button className='btn-danger btn' to='#' data-toggle='modal' data-target='#modalEliminarLinea'
									onClick={() => seleccionarLinea(linea)}
								><i className='fas fa-trash fa-lg'
									style={{ float: 'right' }} title='Eliminar Linea'></i></button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<ModalDialog
                idModal='modalEliminarLinea'
                text='Al realizar está acción la linea se eliminara permanentemente. ¿Desea continuar?'
                accion={() => eliminarLinea(lineaseleccionada.id)}
            />
		</Fragment>
	)
}

export default TablaLinea