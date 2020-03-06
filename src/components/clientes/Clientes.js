import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import TablaClientes from './TablaClientes'
import Sidebar from '../layout/Sidebar'
import Topbar from '../layout/Topbar'
import Footer from '../layout/Footer'
import ModalClientes from './ModalClientes'

const Clientes = () => {
    return (
        <Fragment>
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div className='container-fluid'>
                        <h1 className='h3 mb-2 text-gray-800'>clientes</h1>
                        <p className='mb-4'></p>

                        <div className='card shadow mb-4'>
                            <div className='card-header py-3'>
                                <h6 className='m-0 font-weight-bold text-primary'>Clientes<Link to='#' data-toggle='modal'
                                    data-target='#clienteModal'><i className='fas fa-user-plus fa-lg'
                                        style={{ float: 'right' }} title='Agregar cliente'></i></Link>
                                </h6>
                            </div>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <TablaClientes />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <ModalClientes />
        </Fragment>
    )
}

export default Clientes