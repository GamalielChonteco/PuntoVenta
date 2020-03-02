import React, { Fragment, useContext, useState, useEffect } from 'react'
import Sidebar from '../layout/Sidebar'
import Topbar from '../layout/Topbar'
import Footer from '../layout/Footer'

import authContext from '../../context/autenticacion/authContext'

const Perfil = () => {

    const AuthContext = useContext(authContext)
    const { usuario } = AuthContext

    const initialState = {
        nombre: '',
        ap_paterno: '',
        ap_materno: '',
        username: '',
        new_password: ''
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

    const { nombre, tipo_usuario, username } = user
    
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
                                            <img className='img-fluid px-3 px-sm-4 mt-3 mb-4 rounded-circle' style={{ width: 21.1 + 'em' }} src='https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg' alt='Foto de perfil' />
                                        </div>
                                        <div className='text-gray-800 p-3'>
                                            <span className='text-primary font-weight-bold'>Nombre: </span> {nombre}
                                        </div>
                                        <div className='text-gray-800 p-3'>
                                            <span className='text-primary font-weight-bold'>Cargo: </span> {tipo_usuario}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-8 col-lg-7'>
                                <div className='card shadow mb-4'>
                                    <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                                        <h6 className='m-0 font-weight-bold text-primary'>Mis datos</h6>
                                    </div>
                                    <div className='card-body'>
                                        <form className='user'>
                                            <div className='form-group row'>
                                                <div className='col-sm-12 mb-12 mb-sm-0'>
                                                    <label htmlFor='nombreUsuario'>Nombre(s)</label>
                                                    <input value={nombre} type='text' className='form-control' name='' id='nombreUsuario' />
                                                </div>
                                            </div>
                                            <div className='form-group row'>
                                                <div className='col-sm-6'>
                                                    <label htmlFor="paternoUsuario">Apellido paterno</label>
                                                    <input type='text' className='form-control' id='paternoUsuario' />
                                                </div>
                                                <div className='col-sm-6'>
                                                    <label htmlFor="maternoUsuario">Apellido materno</label>
                                                    <input type='text' className='form-control' id='maternoUsuario' />
                                                </div>
                                            </div>
                                            <div className='form-group row'>
                                                <div className='col-sm-6'>
                                                    <label htmlFor="userName">Nombre de usuario</label>
                                                    <input value={username} type='text' className='form-control' id='userName' />
                                                </div>
                                                <div className='col-sm-6'>
                                                    <label htmlFor="passwordActual">Contraseña actual</label>
                                                    <input type='password' className='form-control' id='passwordActual' />
                                                </div>
                                            </div>
                                            <div className='form-group row'>
                                                <div className='col-sm-6 mb-3 mb-sm-0'>
                                                    <label htmlFor="nuevaPassword">Nueva contraseña</label>
                                                    <input type='password' className='form-control' id='nuevaPassword'/>
                                                </div>
                                                <div className='col-sm-6'>
                                                    <label htmlFor="repetirPassword">Repetir nueva contraseña</label>
                                                    <input minLength='6' type='password' className='form-control' id='repetirPassword'/>
                                                </div>
                                            </div>
                                            <button className='btn btn-primary btn-user btn-block' type='button'>
                                                Guardar cambios
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Perfil