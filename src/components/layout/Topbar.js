import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import authContext from '../../context/autenticacion/authContext'

const Topbar = () => {

    // Extraemos al usuario autenticado
    const AuthContext = useContext(authContext)
    const { usuario, usuarioAutenticado, cerrarSesion } = AuthContext

    useEffect(() => {
        usuarioAutenticado()
        // eslint-disable-next-line
    }, [])

    return (
        <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>

            <button id='sidebarToggleTop' className='btn btn-link d-md-none rounded-circle mr-3'>
                <i className='fa fa-bars'></i>
            </button>

            <ul className='navbar-nav ml-auto'>

                <li className='nav-item dropdown no-arrow'>
                    <Link className='nav-link dropdown-toggle' to='#' id='userDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                        {usuario ? <span className='mr-2 d-lg-inline text-gray-600 small'>{usuario.nombre}</span> : null}
                        <img className='img-profile rounded-circle' src='https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg' alt='' />
                    </Link>
                    <div className='dropdown-menu dropdown-menu-right shadow animated--grow-in' aria-labelledby='userDropdown'>
                        <Link className='dropdown-item' to='/perfil'>
                            <i className='fas fa-user fa-sm fa-fw mr-2 text-gray-400'></i>
                            Perfil
                        </Link>
                        <div className='dropdown-divider'></div>
                        <button className='dropdown-item'
                            onClick={() => cerrarSesion()}
                        >
                            <i className='fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400'></i>
                            Cerrar sesión
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Topbar