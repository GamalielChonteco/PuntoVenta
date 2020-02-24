import React, { useState, useContext, useEffect } from 'react'
import productoContext from '../../context/productos/productoContext'
import lineaContext from '../../context/lineas/lineaContext'
import impuestoContext from '../../context/impuestos/impuestoContext'

const ModalProducto = () => {

    // Extrar producto seleccionado del state
    const productosContext = useContext(productoContext)
    const { productoseleccionado, crearProducto, actualizarProducto, limpiarProducto } = productosContext

    // Extrar lineas del state
    const lineasContext = useContext(lineaContext)
    const { lineas } = lineasContext

    // Extrar impuestos del state
    const impuestosContext = useContext(impuestoContext)
    const { impuestos } = impuestosContext

    // State inicial
    const initialState = {
        activo: 1,
        cantidad_1: 1,
        cantidad_2: 0.0,
        cantidad_3: 0.0,
        codigo: '',
        costo: 0.0,
        existencia: 0.0,
        image: null,
        impuesto: 0,
        linea: 0,
        marca: '',
        precio_1: 0.0,
        precio_2: 0.0,
        precio_3: 0.0,
        producto: ''
    }

    // Detectar si hay un producto seleccionado
    useEffect(() => {
        if (productoseleccionado !== null) {
            guardarProducto(productoseleccionado)
        } else {
            guardarProducto(initialState)
        }
    }, [productoseleccionado])

    // State del formulario
    const [productoNuevo, guardarProducto] = useState(initialState)

    // Extraer datos del state del formulario
    const { cantidad_1, cantidad_2, cantidad_3, codigo, costo, existencia, impuesto, linea, marca, precio_1, precio_2, precio_3, producto } = productoNuevo


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (productoseleccionado === null) {
            crearProducto(productoNuevo)
        } else {
            actualizarProducto(productoNuevo)
            limpiarProducto()
        }
        
        // Reiniciar formulario
        guardarProducto(initialState)
    }

    const actualizar = e => {
        guardarProducto({
            ...productoNuevo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='modal fade' id='productoModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>{(productoseleccionado !== null) ? 'Editar producto' : 'Agregar producto'}</h5>
                        <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'>×</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <form id='form-producto'>
                            <div className='form-group row'>
                                <div className='col-sm-6'>
                                    <label htmlFor='codigoProducto'>Código</label>
                                    <input onChange={actualizar} value={codigo} type='text' name='codigo' className='form-control' id='codigoProducto' />
                                </div>
                                <div className='col-sm-6'>
                                    <label htmlFor='lineaProducto'>Linea</label>
                                    <select placeholder='Seleccione una opción' onChange={actualizar} value={linea} name='linea' id='lineaProducto' className='form-control'>
                                        <option value='0'>Seleccione una opción</option>
                                        {
                                            lineas.map((linea) => (
                                                <option value={linea.id} key={linea.id}>{linea.linea}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-12 mb-12 mb-sm-0'>
                                    <label htmlFor='nombreProducto'>Producto</label>
                                    <input onChange={actualizar} value={producto} type='text' name='producto' className='form-control' id='nombreProducto' />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-6 mb-3 mb-sm-0'>
                                    <label htmlFor='marcaProducto'>Marca</label>
                                    <input onChange={actualizar} value={marca} type='text' name='marca' className='form-control' id='marcaProducto' />
                                </div>
                                <div className='col-sm-6'>
                                    <label htmlFor='existenciaProducto'>Existencia</label>
                                    <input onChange={actualizar} value={existencia} type='number' name='existencia' className='form-control' id='existenciaProducto' />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-6 mb-3 mb-sm-0'>
                                    <label htmlFor='costoProducto'>Costo</label>
                                    <input onChange={actualizar} value={costo} type='number' name='costo' className='form-control' id='costoProducto' />
                                </div>
                                <div className='col-sm-6'>
                                    <label htmlFor='impuestoProducto'>Impuesto</label>
                                    <select onChange={actualizar} value={impuesto} name='impuesto' id='impuestoProducto' className='form-control'>
                                        <option value='0'>Seleccione una opción</option>
                                        {
                                            impuestos.map((impuesto) => (
                                                <option value={impuesto.id} key={impuesto.id}>{impuesto.impuesto}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-4 mb-3 mb-sm-0'>
                                    <label htmlFor='precioUnoProducto'>Precio 1</label>
                                    <input onChange={actualizar} value={precio_1} type='number' name='precio_1' className='form-control' id='precioUnoProducto' />
                                </div>
                                <div className='col-sm-4'>
                                    <label htmlFor='precioDosProducto'>Precio 2</label>
                                    <input onChange={actualizar} value={precio_2} type='number' name='precio_2' className='form-control' id='precioDosProducto' />
                                </div>
                                <div className='col-sm-4'>
                                    <label htmlFor='precioTresProducto'>Precio 3</label>
                                    <input onChange={actualizar} value={precio_3} type='number' name='precio_3' className='form-control' id='precioTresProducto' />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-4 mb-3 mb-sm-0'>
                                    <label htmlFor='cantidadUnoProducto'>Cantidad 1</label>
                                    <input onChange={actualizar} value={cantidad_1} type='number' name='cantidad_1' className='form-control' id='cantidadUnoProducto' disabled />
                                </div>
                                <div className='col-sm-4'>
                                    <label htmlFor='cantidadDosProducto'>Cantidad 2</label>
                                    <input onChange={actualizar} value={cantidad_2} type='number' name='cantidad_2' className='form-control' id='cantidadDosProducto' />
                                </div>
                                <div className='col-sm-4'>
                                    <label htmlFor='cantidadTresProducto'>Cantidad 3</label>
                                    <input onChange={actualizar} value={cantidad_3} type='number' name='cantidad_3' className='form-control' id='cantidadTresProducto' />
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button className='btn btn-danger' type='button' data-dismiss='modal' onClick={() => limpiarProducto()}>Cancelar</button>
                                <button className='btn btn-success' type='button' onClick={handleSubmit} data-dismiss='modal'>Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProducto