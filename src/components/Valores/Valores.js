import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import lineaContext from '../../context/lineas/lineaContext'
import impuestoContext from '../../context/impuestos/impuestoContext'

import TablaImpuesto from './TablaImpuesto'
import TablaLinea from './TablaLinea'
import Sidebar from '../layout/Sidebar'
import Topbar from '../layout/Topbar'

const Valores = () => {

    const lineasContext = useContext(lineaContext)
    const { limpiarLinea } = lineasContext

    const impuestosContext = useContext(impuestoContext)
    const { limpiarImpuesto } = impuestosContext

    return (
        <Fragment>
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h1 className='h3 mb-2 text-gray-800'>Lineas</h1>
                                <p className='mb-4'></p>

                                <div className='card shadow mb-4'>
                                    <div className='card-header py-3'>
                                        <h6 className='m-0 font-weight-bold text-primary'>
                                            Lineas
                                            <Link to='#' data-toggle='modal'
                                                onClick={limpiarLinea}
                                                data-target='#lineaModal'><i className='fas fa-file-medical fa-lg'
                                                    style={{ float: 'right' }} title='Agregar Producto'></i>
                                            </Link>
                                        </h6>
                                    </div>
                                    <div className='card-body'>
                                        <div className='table-responsive'>
                                            <TablaLinea />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <h1 className='h3 mb-2 text-gray-800'>Impuestos</h1>
                                <p className='mb-4'></p>

                                <div className='card shadow mb-4'>
                                    <div className='card-header py-3'>
                                        <h6 className='m-0 font-weight-bold text-primary'>
                                            Impuestos
                                            <Link to='#' data-toggle='modal'
                                                onClick={limpiarImpuesto}
                                                data-target='#impuestoModal'><i className='fas fa-file-medical fa-lg'
                                                    style={{ float: 'right' }} title='Agregar Impuesto'></i>
                                            </Link>
                                        </h6>
                                    </div>
                                    <div className='card-body'>
                                        <div className='table-responsive'>
                                            <TablaImpuesto />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Valores