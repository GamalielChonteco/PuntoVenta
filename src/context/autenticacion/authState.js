import React, { useReducer } from 'react'

import authContext from '../../context/autenticacion/authContext'
import authReducer from '../../context/autenticacion/authReducer'
import { alertaSesion } from '../../components/alertas'

import clientAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

import {
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types'

const AuthState = props => {

    // State inicial
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true
    }

    // Crear state
    const [state, dispatch] = useReducer(authReducer, initialState)

    // Validar que el usuario este autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token')

        if (token) {
            tokenAuth(token)
        }

        try {
            const response = await clientAxios.get('/auth')
            dispatch({
                type: OBTENER_USUARIO,
                payload: response.data.usuario
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    // Funcion para iniciar sesion
    const iniciarSesion = async datos => {
        try {
            const response = await clientAxios.post('/auth', datos)
            dispatch({
                type: LOGIN_EXITOSO,
                payload: response.data.token
            })
            usuarioAutenticado()
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error
            })
            alertaSesion()
        }
    }

    // Funcion para cerrar sesion
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState