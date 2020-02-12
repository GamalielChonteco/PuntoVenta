import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import TablaProducto from './TablaProducto'
class Productos extends Component {

    state = {
        lineas: [],
        impuestos: [],
        productos: [],
        tipoProducto: 2
    }

    componentDidMount() {
        this.obtenerLineas()
        this.obtenerImpuestos()
        this.obtenerProductos()
    }

    async obtenerLineas() {
        const url = 'https://localhost:44301/linea'

        const lineas = await axios.get(url)

        this.setState({ lineas: lineas.data })
    }

    async obtenerProductos() {
        const url = 'https://localhost:44301/producto'

        const productos = await axios.get(url)

        this.setState({ productos: productos.data })
    }

    async obtenerImpuestos() {
        const url = 'https://localhost:44301/impuesto'

        const impuestos = await axios.get(url)

        this.setState({ impuestos: impuestos.data })
    }

    actualizar = (e) => {
        this.setState({ tipoProducto: e.target.value })
    }

    render() {

        const { lineas, impuestos, productos } = this.state

        if (lineas.length === 0 || impuestos.length === 0 || productos.length === 0) return <div></div>

        return (
            <Fragment>
                <div className='container-fluid'>
                    <h1 className='h3 mb-2 text-gray-800'>Productos</h1>
                    <p className='mb-4'></p>

                    <div className='card shadow mb-4'>
                        <div className='card-header py-3'>
                            <h6 className='m-0 font-weight-bold text-primary'>
                                Productos
                                <Link to='#' data-toggle='modal'
                                    data-target='#productoModal'><i className='fas fa-file-medical fa-lg'
                                        style={{ float: 'right' }} title='Agregar Producto'></i></Link>
                            </h6>
                        </div>
                        <div className='card-body'>
                            <div className='table-responsive'>
                                <TablaProducto lineas={lineas} impuestos={impuestos} productos={productos} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Productos
