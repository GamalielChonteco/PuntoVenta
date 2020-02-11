import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import TablaImpuesto from './TablaImpuesto'
import axios from 'axios'
import TablaLinea from './TablaLinea'
import ModalLinea from './ModalLinea'
import ModalImpuesto from './ModalImpuesto'

class Valores extends Component {
    state = {  
        impuestos: [],
        lineas: []
    }

    componentDidMount() {
        this.obtenerImpuestos()
        this.obtenerLineas()
    } 
   
    async obtenerImpuestos() {
        const url = 'https://localhost:44301/api/impuesto'

        const impuestos = await axios.get(url)

        this.setState({ impuestos: impuestos.data })
    }
    async obtenerLineas() {
        const url = 'https://localhost:44301/api/linea'

        const lineas = await axios.get(url)

        this.setState({ lineas: lineas.data })
    }



    render() { 
        const { impuestos, lineas } = this.state
        
        if (impuestos.length === 0 || lineas.length ===0 ) return <div></div>

        return ( 
            <Fragment>
                <div className='container-fluid'>
                    <h1 className='h3 mb-2 text-gray-800'>Lineas</h1>
                    <p className='mb-4'></p>

                    <div className='card shadow mb-4'>
                        <div className='card-header py-3'>
                            <h6 className='m-0 font-weight-bold text-primary'>Lineas<Link to='#' data-toggle='modal'
                                data-target='#lineasModal'><i className='fas fa-file-medical fa-lg'
                                    style={{ float: 'right' }} title='Agregar Producto'></i></Link>
                            </h6>
                        </div>
                        <div className='card-body'>
                            <div className='table-responsive'>
                            <TablaLinea lineas = { lineas }/>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <h1 className='h3 mb-2 text-gray-800'>Impuestos</h1>
                    <p className='mb-4'></p>

                    <div className='card shadow mb-4'>
                        <div className='card-header py-3'>
                            <h6 className='m-0 font-weight-bold text-primary'>Impuestos<Link to='#' data-toggle='modal'
                                data-target='#impuestosModal'><i className='fas fa-file-medical fa-lg'
                                    style={{ float: 'right' }} title='Agregar Impuesto'></i></Link>
                            </h6>
                        </div>
                        <div className='card-body'>
                            <div className='table-responsive'>
                            <TablaImpuesto impuestos = { impuestos }/>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalLinea lineas = {lineas} />
                <ModalImpuesto impuestos = {impuestos} />
            </Fragment>
        )
    }
}
 
export default Valores