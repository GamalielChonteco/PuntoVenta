import React, { useReducer } from 'react'
import usuarioContext from './usuarioContext'
import usuarioReducer from './usuarioReducer'

import clientAxios from '../../config/axios'

import {
    OBTENER_USUARIOS,
    USUARIO_SELECCIONADO,
    AGREGAR_USUARIO,
    ACTUALIZAR_USUARIO,
    LIMPIAR_USUARIO,
    ELIMINAR_USUARIO
} from '../../types'

const UsuarioState = props => {

    // State inicial
    const initialState = {
        usuarios: [],
        usuarioseleccionado: null
    }

    // Crear state
    const [state, dispatch] = useReducer(usuarioReducer, initialState)

    // Obtener usuarios
    const obtenerUsuarios = async () => {
        try {
            const response = await clientAxios.get('/usuario')
            dispatch({
                type: OBTENER_USUARIOS,
                payload: response.data.usuarios
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Crear usuario
    const crearUsuario = async usuario => {
        try {
            const response = await clientAxios.post('/usuario', usuario)
            dispatch({
                type: AGREGAR_USUARIO,
                payload: response.data.usuario
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Actualizar usuario
    const actualizarUsuario = async usuario => {
        try {
            const response = await clientAxios.put(`/usuario/${usuario.id}`, usuario)
            dispatch({
                type: ACTUALIZAR_USUARIO,
                payload: JSON.parse(response.config.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Actualizar password
    const actualizarPassword = async usuario => {
        try {
            await clientAxios.put(`/usuario/password/${usuario.id}`, usuario)
        } catch (error) {
            console.log(error)
        }
    }

    // Eliminar usuario
    const eliminarUsuario = async usuarioId => {
        try {
            await clientAxios.delete(`/usuario/${usuarioId}`)
            dispatch({
                type: ELIMINAR_USUARIO,
                payload: usuarioId
            })
            limpiarUsuario()
        } catch (error) {
            console.log(error)
        }
    }

    // Seleccionar usuario y agregarlo al state
    const seleccionarUsuario = usuario => {
        dispatch({
            type: USUARIO_SELECCIONADO,
            payload: usuario
        })
    }

    // Limpiar usuario seleccionado
    const limpiarUsuario = () => {
        dispatch({
            type: LIMPIAR_USUARIO
        })
    }

    return (
        <usuarioContext.Provider
            value={{
                usuarios: state.usuarios,
                usuarioseleccionado: state.usuarioseleccionado,
                obtenerUsuarios,
                crearUsuario,
                actualizarUsuario,
                actualizarPassword,
                seleccionarUsuario,
                limpiarUsuario,
                eliminarUsuario
            }}
        >
            {props.children}
        </usuarioContext.Provider>
    )
}
 
export default UsuarioState