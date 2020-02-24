import React from 'react'

const ModalUsuarios = () => {

	return (
		<div className='modal fade' id='usuariosModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
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
									<input required type='text' className='form-control' id='nombreUsuario' />
								</div>
							</div>
							<div className='form-group row'>
								<div className='col-sm-6'>
									<label htmlFor='apellidoP'>Apellido Paterno</label>
									<input required type='text' className='form-control' id='apellidoP' />
								</div>
								<div className='col-sm-6'>
									<label htmlFor='apellidoM'>Apellido Materno</label>
									<input required type='text' className='form-control' id='apellidoM' />
								</div>
							</div>

							<div className='form-group row'>
								<div className='col-sm-12'>
									<label htmlFor='tipoUsuario'>Tipo usuario</label>
									<select required name='tipoUsuario' id='tipoUsuario' className='form-control'>
										<option value=''>Seleccione el tipo de usuario</option>
										<option value='1'>Administrador</option>
										<option value='2'>Cajero</option>
										<option value='3'>Inventario</option>
									</select>
								</div>
							</div>
							<div className='modal-footer'>
								<button className='btn btn-danger' type='button' data-dismiss='modal'>Cancelar</button>
								<input className='btn btn-primary' type='submit' value='Guardar' />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalUsuarios
