import React from 'react'

const TablaUsuarios = ({ usuarios }) => {

	if (usuarios.length === 0) return <div></div>;

	return (
		<table className='table table-bordered' id='dataTable' cellSpacing='0'>
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Apellido Paterno</th>
					<th>Apellido Materno</th>
					<th>Tipo Usuario</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{usuarios.map(usuario => (
					<tr key={usuario.id}>
						<td>{usuario.nombre}</td>
						<td>{usuario.ap_paterno}</td>
						<td>{usuario.ap_materno}</td>
						<td>{usuario.inventario}</td>
						<td></td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default TablaUsuarios
