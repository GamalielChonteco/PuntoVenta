import React, { Fragment, useState } from 'react'
import axios from 'axios'
import ModalProducto from './ModalProducto'


const TablaProducto = ({ productos, lineas, impuestos }) => {

    const [data, setData] = useState({})

    const handleClick = (e) => {
        setData(e)
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
                                <td>{producto.id}</td>
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
            <ModalProducto lineas={lineas} impuestos={impuestos} data={data} />
        </Fragment>
    )
}

export default TablaProducto