import React, { useContext, useEffect, Fragment } from 'react'

import usuarioContext from '../../context/usuarios/usuarioContext'

import ModalDialog from '../../components/ModalDialog'

const TablaUsuarios = () => {

	const usuariosContext = useContext(usuarioContext)
	const { usuarios, usuarioseleccionado, obtenerUsuarios, seleccionarUsuario, eliminarUsuario } = usuariosContext

	useEffect(() => {
		obtenerUsuarios()
		// eslint-disable-next-line
	}, [])

	if (usuarios.length === 0) return <div></div>;

	return (
		<Fragment>
			<table className='table table-bordered' id='dataTable' cellSpacing='0'>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>User Name</th>
						<th>Tipo Usuario</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{usuarios.map(usuario => (
						<tr key={usuario.id}>
							<td>{usuario.nombre}</td>
							<td>{usuario.username}</td>
							<td>{usuario.tipo_usuario}</td>
							<td>
								<button className='btn-primary btn' to='#' data-toggle='modal'
									data-target='#usuarioModal'
									onClick={() => seleccionarUsuario(usuario)}
								><i className='fas fa-pen fa-lg'
									style={{ float: 'right' }} title='Editar linea'></i></button>

								<button className='btn-danger btn' to='#' data-toggle='modal' data-target='#modalEliminarProducto'
									onClick={() => seleccionarUsuario(usuario)}
								><i className='fas fa-trash fa-lg'
									style={{ float: 'right' }} title='Eliminar Linea'></i></button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
            <ModalDialog
                idModal='modalEliminarProducto'
                text='Al realizar está acción el usuario se eliminara permanentemente. ¿Desea continuar?'
                accion={() => eliminarUsuario(usuarioseleccionado.id)}
            />
		</Fragment>
	)
}

export default TablaUsuarios
