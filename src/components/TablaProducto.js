import React, { Fragment, useReducer } from 'react'
import axios from 'axios'
import ModalProducto from './ModalProducto'

var initialState = {
    codigo: '',
    precio_1: 0.0,
    precio_2: 0.0,
    precio_3: 0.0,
    cantidad_1: 1,
    cantidad_2: 0.0,
    cantidad_3: 0.0,
    costo: 0.0,
    activo: 1,
    marca: '',
    existencia: 1,
    linea: 0,
    impuesto: 0,
    producto1: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTO':
            return {
                ...state,
                [action.action.atribute]: action.action.value
            }

        case 'LOAD_DATA':
            return action.e

        case 'CLEAN_PRODUCTO':
            return action.initialState

        default:
            return state
    }
}

const TablaProducto = ({ productos, lineas, impuestos }) => {

    const [data, setData] = useReducer(reducer, initialState)

    const handleClick = (e) => {
        setData({
            type: 'LOAD_DATA',
            e
        })
    }

    const actualizar = e => {
        setData({
            type: 'SET_PRODUCTO',
            action: {
                atribute: e.target.name,
                value: e.target.value
            }
        })
    }

    const limpiar = () => {
        setData({
            type: 'CLEAN_PRODUCTO',
            initialState
        })
    }

    const handleDelete = async (id) => {
        const url = 'https://localhost:44301/producto'
        const response = await axios.delete(url, { params: { id: id } })
        console.log(response)
        window.location.reload()
    }

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
                        productos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.codigo}</td>
                                <td>{producto.producto1}</td>
                                <td>{producto.costo}</td>
                                <td>{producto.existencia}</td>
                                <td>{lineas[lineas.findIndex(linea => linea.id === producto.linea)].linea1}</td>
                                <td>{impuestos[impuestos.findIndex(impuesto => impuesto.id === producto.impuesto)].impuesto1}</td>
                                <td>{producto.marca}</td>
                                <td>
                                    <button className='btn-primary btn' to='#' data-toggle='modal'
                                        data-target='#productoModal' onClick={() => handleClick(producto)}><i className='fas fa-pen fa-lg'
                                            style={{ float: 'right' }} title='Editar Producto'></i></button>
                                    <button disabled className='btn-danger btn' onClick={() => handleDelete(producto.id)}><i className='fas fa-trash fa-lg'
                                        style={{ float: 'right' }} title='Eliminar Producto'></i></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <ModalProducto lineas={lineas} impuestos={impuestos} producto={data} actualizarState={actualizar} limpiarState={limpiar} />
        </Fragment>
    )
}

export default TablaProducto