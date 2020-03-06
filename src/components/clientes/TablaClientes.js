import React, { useContext, useEffect, Fragment } from 'react'

import clienteContext from '../../context/clientes/clienteContext'

import ModalDialog from '../../components/ModalDialog'

const TablaClientes = () => {

	const clientesContext = useContext(clienteContext)
	const { clientes, clienteseleccionado, obtenerClientes, seleccionarCliente, eliminarCliente } = clientesContext

	useEffect(() => {
		obtenerClientes()
		// eslint-disable-next-line
	}, [])

	if (clientes.length === 0) return <div></div>;

	return (
		<Fragment>
			<table className='table table-bordered' id='dataTable' cellSpacing='0'>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Dirección</th>
						<th>RFC</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{clientes.map(cliente => (
						<tr key={cliente.id}>
							<td>{cliente.nombre}</td>
							<td>{cliente.direccion}</td>
							<td>{cliente.rfc}</td>
							<td>
								<button className='btn-primary btn' to='#' data-toggle='modal'
									data-target='#clienteModal'
									onClick={() => seleccionarCliente(cliente)}
								><i className='fas fa-pen fa-lg'
									style={{ float: 'right' }} title='Editar linea'></i></button>

								<button className='btn-danger btn' to='#' data-toggle='modal' data-target='#modalEliminarCliente'
									onClick={() => seleccionarCliente(cliente)}
								><i className='fas fa-trash fa-lg'
									style={{ float: 'right' }} title='Eliminar Linea'></i></button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
            <ModalDialog
                idModal='modalEliminarCliente'
                text='Al realizar está acción el usuario se eliminara permanentemente. ¿Desea continuar?'
                accion={() => eliminarCliente(clienteseleccionado.id)}
            />
		</Fragment>
	)
}

export default TablaClientes
