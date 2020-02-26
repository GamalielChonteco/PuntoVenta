import React, { Fragment, useEffect, useContext } from 'react'

import productoContext from '../../context/productos/productoContext'
import lineaContext from '../../context/lineas/lineaContext'
import impuestoContext from '../../context/impuestos/impuestoContext'

import ModalProducto from './ModalProducto'
import ModalDialog from '../ModalDialog'

const TablaProducto = () => {

    // Extraer productos del state
    const productosContext = useContext(productoContext)
    const { productos, productoseleccionado, estadoproducto, obtenerProductos, seleccionarProducto, actualizarEstado, eliminarProducto } = productosContext
    
    // Estraer lineas del state
    const lineasContext = useContext(lineaContext)
    const { lineas, obtenerLineas } = lineasContext
    
    // Estraer impuestos del state
    const impuestosContext = useContext(impuestoContext)
    const { impuestos, obtenerImpuestos } = impuestosContext

    // Obtener productos cuando carga el componente
    useEffect(() => {
        obtenerImpuestos()
        obtenerLineas()
        obtenerProductos()
        // eslint-disable-next-line
    }, [])

    const acciones = producto => {
        if (producto.activo === 1) {
            return (
                <td>
                    <button className='btn-primary btn' to='#' data-toggle='modal'
                        data-target='#productoModal'
                        onClick={() => seleccionarProducto(producto)}
                    ><i className='fas fa-pen fa-lg'
                        style={{ float: 'right' }} title='Editar Producto'></i></button>

                    <button className='btn-danger btn' to='#' data-toggle='modal' data-target='#modalInactivo'><i className='fas fa-trash fa-lg'
                        onClick={() => seleccionarProducto(producto)}
                        style={{ float: 'right' }} title='Eliminar Producto'></i></button>
                </td>
            )
        }
        return (
            <td>
                <button className='btn-primary btn' to='#' data-toggle='modal' data-target='#modalActivo'><i className='fas fa-trash-restore fa-lg'
                    onClick={() => seleccionarProducto(producto)}
                    style={{ float: 'right' }} title='Restaurar Producto'></i></button>

                <button className='btn-danger btn' to='#' data-toggle='modal' data-target='#modalEliminar'><i className='fas fa-trash fa-lg'
                    onClick={() => seleccionarProducto(producto)}
                    style={{ float: 'right' }} title='Eliminar Producto 2'></i></button>
            </td>
        )
    }

    const tipoProducto = (producto) => (
        <tr key={producto.id}>
            <td>{producto.codigo}</td>
            <td>{producto.nombre}</td>
            <td>{producto.costo}</td>
            <td>{producto.existencia}</td>
            <td>{lineas[lineas.findIndex(linea => linea.id === parseInt(producto.linea))].nombre}</td>
            <td>{impuestos[impuestos.findIndex(impuesto => impuesto.id === parseInt(producto.impuesto))].nombre}</td>
            <td>{producto.marca}</td>
            {acciones(producto)}
        </tr>
    )

    if (productos.length === 0 || lineas.length === 0 || impuestos.length === 0) return <div>Cargando...</div>

    return (
        <Fragment>
            <table className='table table-bordered' id='dataTable' cellSpacing='0'>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Costo</th>
                        <th>Existencia</th>
                        <th>Linea</th>
                        <th>Impuesto</th>
                        <th>Marca</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // eslint-disable-next-line
                        productos.map((producto) => {
                            if (producto.activo === estadoproducto) {
                                return tipoProducto(producto)
                            } else if (estadoproducto === 2) {
                                return tipoProducto(producto)
                            }
                        })
                    }
                </tbody>
            </table>
            <ModalProducto />
            <ModalDialog
                idModal='modalInactivo'
                text='Al realizar está acción el producto cambiará de estado a inactivo. ¿Desea continuar?'
                accion={() => actualizarEstado(productoseleccionado)}
                />
            <ModalDialog
                idModal='modalActivo'
                text='Al realizar está acción el producto cambiará de estado a activo. ¿Desea continuar?'
                accion={() => actualizarEstado(productoseleccionado)}
            />
            <ModalDialog
                idModal='modalEliminar'
                text='Al realizar está acción el producto se eliminara permanentemente. ¿Desea continuar?'
                accion={() => eliminarProducto(productoseleccionado.id)}
            />
        </Fragment>
    )
}

export default TablaProducto