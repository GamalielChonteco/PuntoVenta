import React, { useReducer } from 'react'
import impuestoContext from './impuestoContext'
import impuestoReducer from './impuestoReducer'

import clientAxios from '../../config/axios'

import {
    OBTENER_IMPUESTOS, 
    AGREGAR_IMPUESTO, 
    ACTUALIZAR_IMPUESTO, 
    ELIMINAR_IMPUESTO, 
    IMPUESTO_SELECCIONADO,
    LIMPIAR_IMPUESTO
} from '../../types'

const ImpuestoState = props => {

    // State inicial
    const initialState = {
        impuestos: [],
        impuestoseleccionado: null
    }

    // Crear state
    const [state, dispatch] = useReducer(impuestoReducer, initialState)

    // Obtener impuestos
    const obtenerImpuestos = async () => {
        const response = await clientAxios.get('/impuesto')

        dispatch({
            type: OBTENER_IMPUESTOS,
            payload: response.data.impuestos
        })
    }

    // Crear impuesto
    const crearImpuesto = async impuesto => {
        try {
            const response = await clientAxios.post('/impuesto', impuesto)
            dispatch({
                type: AGREGAR_IMPUESTO,
                payload: JSON.parse(response.config.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Actualizar impuesto
    const actualizarImpuesto = async impuesto => {
        try {
            const response = await clientAxios.put(`/impuesto/${impuesto.id}`, impuesto)
            dispatch({
                type: ACTUALIZAR_IMPUESTO,
                payload: JSON.parse(response.config.data)
            })
        } catch (error) {
            console.log(error)
            
        }
    }

    // Eliminar impuesto
    const eliminarImpuesto = async impuestoId => {
        try {
            await clientAxios.delete(`/impuesto/${impuestoId}`)
            dispatch({
                type: ELIMINAR_IMPUESTO,
                payload: impuestoId
            })
            limpiarImpuesto()
        } catch (error) {
            console.log(error)
        }
    }

    // Agregar impuesto seleccionado al state
    const seleccionarImpuesto = impuesto => {
        dispatch({
            type: IMPUESTO_SELECCIONADO,
            payload: impuesto
        })
    }

    // Limpiar impuesto seleccionado
    const limpiarImpuesto = () => {
        dispatch({
            type: LIMPIAR_IMPUESTO
        })
    }

    return (
        <impuestoContext.Provider
            value={{
                impuestos: state.impuestos,
                impuestoseleccionado: state.impuestoseleccionado,
                obtenerImpuestos,
                crearImpuesto,
                actualizarImpuesto,
                eliminarImpuesto,
                seleccionarImpuesto,
                limpiarImpuesto
            }}
        >
            {props.children}
        </impuestoContext.Provider>
    )
}
 
export default ImpuestoState