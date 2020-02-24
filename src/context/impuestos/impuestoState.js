import React, { useReducer } from 'react'
import axios from 'axios'
import impuestoContext from './impuestoContext'
import impuestoReducer from './impuestoReducer'

import {
    OBTENER_IMPUESTOS, 
    AGREGAR_IMPUESTO, 
    ACTUALIZAR_IMPUESTO, 
    ELIMINAR_IMPUESTO, 
    IMPUESTO_SELECCIONADO,
    LIMPIAR_IMPUESTO
} from '../../types'

const ImpuestoState = props => {

    const initialState = {
        impuestos: [],
        impuestoseleccionado: null
    }

    const [state, dispatch] = useReducer(impuestoReducer, initialState)

    const obtenerImpuestos = async () => {
        const url = 'http://localhost:5000/impuesto'

        const response = await axios.get(url)

        dispatch({
            type: OBTENER_IMPUESTOS,
            payload: response.data
        })
    }

    const crearImpuesto = async impuesto => {
        try {
            const url = 'http://localhost:5000/impuesto/'
            const response = await axios.post(url, impuesto)
            dispatch({
                type: AGREGAR_IMPUESTO,
                payload: JSON.parse(response.config.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const actualizarImpuesto = async impuesto => {
        try {
            const url = 'http://localhost:5000/impuesto/'
            const response = await axios.put(url + impuesto.id, impuesto)
            dispatch({
                type: ACTUALIZAR_IMPUESTO,
                payload: JSON.parse(response.config.data)
            })
        } catch (error) {
            console.log(error)
            
        }
    }

    const eliminarImpuesto = async impuestoId => {
        try {
            const url = `http://localhost:5000/impuesto/${impuestoId}`
            const response = await axios.delete(url)
            dispatch({
                type: ELIMINAR_IMPUESTO,
                payload: impuestoId
            })
            limpiarImpuesto()
        } catch (error) {
            console.log(error)
        }
    }

    const seleccionarImpuesto = impuesto => {
        dispatch({
            type: IMPUESTO_SELECCIONADO,
            payload: impuesto
        })
    }

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