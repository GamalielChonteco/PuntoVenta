import React, { Fragment, useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import authContext from '../../context/autenticacion/authContext'
import usuarioContext from '../../context/usuarios/usuarioContext'

import Sidebar from '../layout/Sidebar'
import Topbar from '../layout/Topbar'
import Footer from '../layout/Footer'
import ModalPassword from './ModalPassword'

const Perfil = () => {

    const AuthContext = useContext(authContext)
    const { usuario } = AuthContext

    const usuariosContext = useContext(usuarioContext)
    const { actualizarUsuario } = usuariosContext

    const initialState = {
        nombre: '',
        ap_paterno: '',
        ap_materno: '',
        username: '',
        tipo_usuario: 0
    }

    useEffect(() => {
        if (usuario !== null) {
            guardarUsuario(usuario)
        } else {
            guardarUsuario(initialState)
        }
        // eslint-disable-next-line
    }, [usuario])

    const [user, guardarUsuario] = useState(initialState)

    const { nombre, ap_paterno, ap_materno, username } = user

    const handleSubmit = async (e) => {
        e.preventDefault()

        actualizarUsuario(user)

        // Reiniciar formulario
        guardarUsuario(user)
    }

    const actualizar = e => {
        guardarUsuario({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Fragment>
            <Sidebar />
            <div id='content-wrapper' className='d-flex flex-column'>
                <div id='content'>
                    <Topbar />
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-5'>
                                <div className='card shadow mb-4'>
                                    <div className='card-body'>
                                        <div className='text-center'>
                                            <img className='img-fluid px-3 px-sm-4 mt-3 mb-4 rounded-circle' style={{ width: 21.3 + 'em' }} src='https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg' alt='Foto de perfil' />
                                        </div>
                                        <div className='text-gray-800 text-center'>
                                            Supervisor
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-8 col-lg-7'>
                                <div className='card shadow mb-4'>
                                    <div className='card-header py-3 '>
                                        <h6 className='m-0 font-weight-bold text-primary'>Mis datos
                                            <Link to='#' data-toggle='modal'
                                                data-target='#passwordModal'><i className='fas fa-key fa-lg'
                                                    style={{ float: 'right' }} title='Cambiar contraseña'></i>
                                            </Link>
                                        </h6>
                                    </div>
                                    <div className='card-body'>
                                        <form className='user'>
                                            <div className='form-group row'>
                                                <div className='col-sm-12 mb-12 mb-sm-0'>
                                                    <label htmlFor='nombreUsuario'>Nombre(s)</label>
                                                    <input onChange={actualizar} value={nombre} type='text' className='form-control' name='nombre' id='nombreUsuario' />
                                                </div>
                                            </div>
                                            <div className='form-group row'>
                                                <div className='col-sm-6'>
                                                    <label htmlFor='paternoUsuario'>Apellido paterno</label>
                                                    <input onChange={actualizar} value={ap_paterno} type='text' className='form-control' name='ap_paterno' id='paternoUsuario' />
                                                </div>
                                                <div className='col-sm-6'>
                                                    <label htmlFor='maternoUsuario'>Apellido materno</label>
                                                    <input onChange={actualizar} value={ap_materno} type='text' className='form-control' name='ap_materno' id='maternoUsuario' />
                                                </div>
                                            </div>
                                            <div className='form-group row'>
                                                <div className='col-sm-6'>
                                                    <label htmlFor='userName'>Nombre de usuario</label>
                                                    <input onChange={actualizar} value={username} type='text' className='form-control' name='username' id='userName' />
                                                </div>
                                            </div>
                                            <button className='btn btn-primary btn-user btn-block' type='button' onClick={handleSubmit}>
                                                Guardar cambios
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalPassword />
                <Footer />
            </div>
        </Fragment>
    )
}

export default Perfil