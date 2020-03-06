import React, { useContext, useState, useEffect } from 'react'

import authContext from '../../context/autenticacion/authContext'
import usuarioContext from '../../context/usuarios/usuarioContext'

const ModalPassword = () => {

    const AuthContext = useContext(authContext)
    const { usuario } = AuthContext

    const usuariosContext = useContext(usuarioContext)
    const { actualizarPassword } = usuariosContext

    const initialState = {
        password_actual: '',
        password_nueva: '',
        password_repetir: ''
    }

    useEffect(() => {
        if (usuario !== null) {
            guardarPassword({
                ...usuario,
                password_actual: '',
                password_nueva: '',
                password_repetir: ''
            })
        }
    }, [usuario])

    const [password, guardarPassword] = useState(initialState)

    const { password_actual, password_nueva, password_repetir } = password

    const handleSubmit = async (e) => {
        e.preventDefault()

        actualizarPassword(password)

        // Reiniciar formulario
        // guardarPassword(initialState)
    }

    const actualizar = e => {
        guardarPassword({
            ...password,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='modal fade' id='passwordModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Cambiar contraseña</h5>
                        <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'>×</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <form id='form-usuarios' className='user'>
                            <div className='form-group row'>
                                <div className='col-sm-12 mb-12 mb-sm-0'>
                                    <label htmlFor='passwordActual'>Contraseña actual</label>
                                    <input onChange={actualizar} value={password_actual} name='password_actual' type='password' className='form-control' id='passwordActual' />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-12 mb-12 mb-sm-0'>
                                    <label htmlFor='passwordNueva'>Nueva contraseña</label>
                                    <input onChange={actualizar} value={password_nueva} name='password_nueva' type='password' className='form-control' id='passwordNueva' />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-12 mb-12 mb-sm-0'>
                                    <label htmlFor='passwordRepetir'>Repetir nueva contraseña</label>
                                    <input onChange={actualizar} value={password_repetir} name='password_repetir' type='password' className='form-control' id='passwordRepetir' />
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button className='btn btn-danger' type='button' data-dismiss='modal'>Cancelar</button>
                                <button onClick={handleSubmit} className='btn btn-primary' type='button' data-dismiss='modal'>Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPassword