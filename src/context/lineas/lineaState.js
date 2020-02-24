import React, { useReducer } from 'react'
import axios from 'axios'
import lineaContext from './lineaContext'
import lineaReducer from './lineaReducer'

import {
    OBTENER_LINEAS,
    AGREGAR_LINEA,
    ACTUALIZAR_LINEA,
    ELIMINAR_LINEA,
    LINEA_SELECCIONADA,
    LIMPIAR_LINEA
} from '../../types'

const LineaState = props => {

    const initialState = {
        lineas: [],
        lineaseleccionada: null
    }

    const [state, dispatch] = useReducer(lineaReducer, initialState)

    const obtenerLineas = async () => {
        const url = 'http://localhost:5000/linea'

        const response = await axios.get(url)

        dispatch({
            type: OBTENER_LINEAS,
            payload: response.data
        })
    }

    const crearLinea = async linea => {
        try {
            const url = 'http://localhost:5000/linea/'
            const response = await axios.post(url, linea)
            dispatch({
                type: AGREGAR_LINEA,
                payload: JSON.parse(response.config.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const actualizarLinea = async linea => {
        try {
            const url = 'http://localhost:5000/linea/'
            const response = await axios.put(url + linea.id, linea)
            dispatch({
                type: ACTUALIZAR_LINEA,
                payload: JSON.parse(response.config.data)
            })
        } catch (error) {
            console.log(error)
            
        }
    }

    const eliminarLinea = async lineaId => {
        try {
            const url = `http://localhost:5000/linea/${lineaId}`
            const response = await axios.delete(url)
            console.log(response)
            dispatch({
                type: ELIMINAR_LINEA,
                payload: lineaId
            })
            limpiarLinea()
        } catch (error) {
            console.log(error)
        }
    }

    const seleccionarLinea = linea => {
        dispatch({
            type: LINEA_SELECCIONADA,
            payload: linea
        })
    }

    const limpiarLinea = () => {
        dispatch({
            type: LIMPIAR_LINEA
        })
    }

    return (
        <lineaContext.Provider
            value={{
                lineas: state.lineas,
                lineaseleccionada: state.lineaseleccionada,
                obtenerLineas,
                crearLinea,
                actualizarLinea,
                eliminarLinea,
                seleccionarLinea,
                limpiarLinea
            }}
        >
            {props.children}
        </lineaContext.Provider>
    )
}

export default LineaState