import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import TablaUsuarios from './TablaUsuarios'
import Sidebar from '../layout/Sidebar'
import Topbar from '../layout/Topbar'
import Footer from '../layout/Footer'
import ModalUsuarios from './ModalUsuarios'

const Usuarios = () => {
    return (
        <Fragment>
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div className='container-fluid'>
                        <h1 className='h3 mb-2 text-gray-800'>Usuarios</h1>
                        <p className='mb-4'></p>

                        <div className='card shadow mb-4'>
                            <div className='card-header py-3'>
                                <h6 className='m-0 font-weight-bold text-primary'>Usuarios<Link to='#' data-toggle='modal'
                                    data-target='#usuarioModal'><i className='fas fa-user-plus fa-lg'
                                        style={{ float: 'right' }} title='Agregar Usuario'></i></Link>
                                </h6>
                            </div>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <TablaUsuarios />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <ModalUsuarios />
        </Fragment>
    )
}

export default Usuarios