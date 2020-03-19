import React, { useReducer } from 'react'
import clienteContext from './clienteContext'
import clienteReducer from './clienteReducer'
import { alerta, alertaError } from '../../components/alertas'

import clientAxios from '../../config/axios'

import {
    OBTENER_CLIENTES,
    CLIENTE_SELECCIONADO,
    AGREGAR_CLIENTE,
    ACTUALIZAR_CLIENTE,
    LIMPIAR_CLIENTE,
    ELIMINAR_CLIENTE
} from '../../types'

const ClienteState = props => {

    const initialState = {
        clientes: [],
        clienteseleccionado: null
    }

    const [state, dispatch] = useReducer(clienteReducer, initialState)

    const obtenerClientes = async () => {
        try {
            const response = await clientAxios.get('/cliente')
            dispatch({
                type: OBTENER_CLIENTES,
                payload: response.data.clientes
            })
        } catch (error) {
            console.log(error)
        }
    }

    const crearCliente = async cliente=> {
        try {
            const response = await clientAxios.post('/cliente', cliente)
            dispatch({
                type: AGREGAR_CLIENTE,
                payload: response.data.cliente
            })
            alerta('Creado correctamente')
        } catch (error) {
            alertaError()
        }
    }

    const actualizarCliente = async cliente => {
        try {
            const response = await clientAxios.put(`/cliente/${cliente.id}`, cliente)
            dispatch({
                type: ACTUALIZAR_CLIENTE,
                payload: JSON.parse(response.config.data)
            })
            alerta('Modificado correctamente')
        } catch (error) {
            alertaError()
        }
    }

    const eliminarCliente = async clienteId => {
        try {
            await clientAxios.delete(`/cliente/${clienteId}`)
            dispatch({
                type: ELIMINAR_CLIENTE,
                payload: clienteId
            })
            limpiarCliente()
            alerta('Eliminado correctamente')
        } catch (error) {
            alertaError()
        }
    }

    const seleccionarCliente = cliente => {
        dispatch({
            type: CLIENTE_SELECCIONADO,
            payload: cliente
        })
    }

    const limpiarCliente = () => {
        dispatch({
            type: LIMPIAR_CLIENTE
        })
    }

    return (
        <clienteContext.Provider
            value={{
                clientes: state.clientes,
                clienteseleccionado: state.clienteseleccionado,
                obtenerClientes,
                crearCliente,
                actualizarCliente,
                seleccionarCliente,
                limpiarCliente,
                eliminarCliente
            }}
        >
            {props.children}
        </clienteContext.Provider>
    )
}
 
export default ClienteState