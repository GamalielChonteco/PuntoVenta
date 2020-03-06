import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import productoContext from '../../context/productos/productoContext'
import authContext from '../../context/autenticacion/authContext'

import TablaProducto from './TablaProducto'
import Sidebar from '../layout/Sidebar'
import Topbar from '../layout/Topbar'
import Footer from '../layout/Footer'
import ModalProducto from './ModalProducto'

const Productos = () => {

    // Extraer el estado del producto
    const productosContext = useContext(productoContext)
    const { estadoproducto, filtrarProducto, limpiarProducto } = productosContext
    
    // Validamos el usuario autenticado
    const AuthContext = useContext(authContext)
    const { usuarioAutenticado } = AuthContext

    useEffect(() => {
        usuarioAutenticado()
        // eslint-disable-next-line
    }, [])

    // Cambiar el filtro del estado
    const filtrar = e => {
        const estado = parseInt(e.target.value)
        filtrarProducto(estado)
    }


    return (
        <Fragment>
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div className='container-fluid'>
                        <h1 className='h3 mb-2 text-gray-800'>Productos</h1>
                        <p className='mb-4'></p>

                        <div className='card shadow mb-4'>
                            <div className='card-header py-3'>
                                <h6 className='m-0 font-weight-bold text-primary'>
                                    Productos&nbsp;
                                    <select onChange={filtrar} value={estadoproducto} className='m-0 font-weight-bold text-primary' name="tipoProducto" id="tipoProducto">
                                        <option value={1}>Activos</option>
                                        <option value={0}>Inactivos</option>
                                        <option value={2}>Todos</option>
                                    </select>
                                    <Link to='#' data-toggle='modal'
                                        onClick={limpiarProducto}
                                        data-target='#productoModal'><i className='fas fa-file-medical fa-lg'
                                            style={{ float: 'right' }} title='Agregar Producto'></i></Link>
                                </h6>
                            </div>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <TablaProducto />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <ModalProducto />
        </Fragment>
    )
}

export default Productos
