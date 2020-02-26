import React, { useContext, useEffect, useState } from 'react'

import lineaContext from '../../context/lineas/lineaContext'

const ModalLinea = () => {

    // Extrar linea del state
    const lineasContext = useContext(lineaContext)
    const { lineaseleccionada, crearLinea, actualizarLinea, limpiarLinea } = lineasContext

    const initialState = {
        nombre: '',
        descripcion: ''
    }

    useEffect(() => {
        if (lineaseleccionada !== null) {
            guardarLinea(lineaseleccionada)
        } else {
            guardarLinea(initialState)
        }
    }, [lineaseleccionada])

    const [lineaNueva, guardarLinea] = useState(initialState)

    const { nombre, descripcion } = lineaNueva

    const handleSubmit = e => {
        e.preventDefault()

        if (lineaseleccionada === null) {
            crearLinea(lineaNueva)    
        } else {
            actualizarLinea(lineaNueva)
            limpiarLinea()
        }

        // Reiniciar formulario
        guardarLinea(initialState)
    }

    const actualizar = e => {
        guardarLinea({
            ...lineaNueva,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='modal fade' id='lineaModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Agregar linea</h5>
                        <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'>×</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <form id='form-linea'>
                            <div className='form-group row'>
                                <div className='col-sm-12 mb-12 mb-sm-0'>
                                    <label htmlFor='nombreLinea'>Linea</label>
                                    <input onChange={actualizar} value={nombre} name='nombre' type='text' className='form-control' id='nombreLinea' />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-12 mb-12 mb-sm-0'>
                                    <label htmlFor='descripcionLinea'>Descripción</label>
                                    <textarea onChange={actualizar} value={descripcion} name='descripcion' type='text' className='form-control' id='descripcionLinea'></textarea>
                                </div>
                            </div>

                            <div className='modal-footer'>
                                <button className='btn btn-danger' type='button' data-dismiss='modal' onClick={() => limpiarLinea()}>Cancelar</button>
                                <button className='btn btn-primary' type='button' data-dismiss='modal' onClick={handleSubmit}>Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLinea;
