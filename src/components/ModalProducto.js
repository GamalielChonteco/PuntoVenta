import React, { useReducer } from 'react'
import axios from 'axios'

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_PRODUCTO':
            return {
                ...state,
                [action.action.atribute]: action.action.value
            }
        
        default:
            return state
    }
}

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

const ModalProducto = ({ lineas, impuestos }) => {

    const [producto, dispatch] = useReducer(reducer, initialState)

    const actualizar = e => {
        dispatch({
            type: 'SET_PRODUCTO',
            action: {
                atribute: e.target.name,
                value: e.target.value
            }
        })
    }

    const handleSubmit = async () => {
        const url = 'https://localhost:44301/api/producto'
        if (producto.id) {
            const response = await axios.put(url, producto, { params: { id: producto.id } })
            console.log(response)
        } else {
            const response = await axios.post(url, producto)
            console.log(response)
        }
    }

    return (
        <div className='modal fade' id='productoModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Agregar producto</h5>
                        <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'>×</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <form id='form-producto' onSubmit={handleSubmit}>
                            <div className='form-group row'>
                                <div className='col-sm-12 mb-12 mb-sm-0'>
                                    <label htmlFor='codigoProducto'>Código</label>
                                    <input onChange={actualizar} value={producto.codigo} type='text' name='codigo' className='form-control' id='codigoProducto' />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-6'>
                                    <label htmlFor='nombreProducto'>Producto</label>
                                    <input onChange={actualizar} value={producto.producto1} type='text' name='producto1' className='form-control' id='nombreProducto' />
                                </div>
                                <div className='col-sm-6'>
                                    <label htmlFor='lineaProducto'>Linea</label>
                                    <select onChange={actualizar} value={producto.linea} name='linea' id='lineaProducto' className='form-control'>
                                        <option value="0">Seleccione una opción</option>
                                        {
                                            lineas.map((linea) => (
                                                <option value={linea.id} key={linea.id}>{linea.linea1}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-6 mb-3 mb-sm-0'>
                                    <label htmlFor='marcaProducto'>Marca</label>
                                    <input onChange={actualizar} value={producto.marca} type='text' name='marca' className='form-control' id='marcaProducto' />
                                </div>
                                <div className='col-sm-6'>
                                    <label htmlFor='existenciaProducto'>Existencia</label>
                                    <input onChange={actualizar} value={producto.existencia} type='number' name='existencia' className='form-control' id='existenciaProducto' />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-6 mb-3 mb-sm-0'>
                                    <label htmlFor='costoProducto'>Costo</label>
                                    <input onChange={actualizar} value={producto.costo} type='number' name='costo' className='form-control' id='costoProducto' />
                                </div>
                                <div className='col-sm-6'>
                                    <label htmlFor='impuestoProducto'>Impuesto</label>
                                    <select onChange={actualizar} value={producto.impuesto} name='impuesto' id='impuestoProducto' className='form-control'>
                                        <option value="0">Seleccione una opción</option>
                                        {
                                            impuestos.map((impuesto) => (
                                                <option value={impuesto.id} key={impuesto.id}>{impuesto.impuesto1}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-4 mb-3 mb-sm-0'>
                                    <label htmlFor='precioUnoProducto'>Precio 1</label>
                                    <input onChange={actualizar} value={producto.precio_1} type='number' name='precio_1' className='form-control' id='precioUnoProducto' />
                                </div>
                                <div className='col-sm-4'>
                                    <label htmlFor='precioDosProducto'>Precio 2</label>
                                    <input onChange={actualizar} value={producto.precio_2} type='number' name='precio_2' className='form-control' id='precioDosProducto' />
                                </div>
                                <div className='col-sm-4'>
                                    <label htmlFor='precioTresProducto'>Precio 3</label>
                                    <input onChange={actualizar} value={producto.precio_3} type='number' name='precio_3' className='form-control' id='precioTresProducto' />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-4 mb-3 mb-sm-0'>
                                    <label htmlFor='cantidadUnoProducto'>Cantidad 1</label>
                                    <input onChange={actualizar} value={producto.cantidad_1} type='number' name='cantidad_1' className='form-control' id='cantidadUnoProducto' disabled />
                                </div>
                                <div className='col-sm-4'>
                                    <label htmlFor='cantidadDosProducto'>Cantidad 2</label>
                                    <input onChange={actualizar} value={producto.cantidad_2} type='number' name='cantidad_2' className='form-control' id='cantidadDosProducto' />
                                </div>
                                <div className='col-sm-4'>
                                    <label htmlFor='cantidadTresProducto'>Cantidad 3</label>
                                    <input onChange={actualizar} value={producto.cantidad_3} type='number' name='cantidad_3' className='form-control' id='cantidadTresProducto' />
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button className='btn btn-danger' type='button' data-dismiss='modal'>Cancelar</button>
                                <input className='btn btn-primary' type='submit' value='Agregar' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProducto