import React, { useReducer } from 'react'
import axios from 'axios'
import productoContext from './productoContext'
import productoReducer from './productoReducer'

import {
    OBTENER_PRODUCTOS,
    FILTRAR_PRODUCTO,
    PRODUCTO_SELECCIONADO,
    AGREGAR_PRODUCTO,
    ACTUALIZAR_PRODUCTO,
    ACTUALIZAR_ESTADO,
    ELIMINAR_PRODUCTO,
    LIMPIAR_PRODUCTO
} from '../../types'

const ProductoState = props => {

    const initialState = {
        productos: [],
        productoseleccionado: null,
        estadoproducto: 1
    }

    const [state, dispatch] = useReducer(productoReducer, initialState)

    const obtenerProductos = async () => {
        try {
            const url = 'http://localhost:5000/producto'
    
            const response = await axios.get(url)
    
            dispatch({
                type: OBTENER_PRODUCTOS,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const crearProducto = async producto => {
        try {
            const url = 'http://localhost:5000/producto/'
            const response = await axios.post(url, producto)
            dispatch({
                type: AGREGAR_PRODUCTO,
                payload: JSON.parse(response.config.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const actualizarProducto = async producto => {
        try {
            const url = 'http://localhost:5000/producto/'
            const response = await axios.put(url + producto.id, producto)
            dispatch({
                type: ACTUALIZAR_PRODUCTO,
                payload: JSON.parse(response.config.data)
            })
        } catch (error) {
            console.log(error)
            
        }
    }

    const actualizarEstado = async producto => {
        try {
            const url = 'http://localhost:5000/producto/'
            const response = await axios.put(url + producto.id, {...producto, activo: (producto.activo === 1) ? 0 : 1})
            dispatch({
                type: ACTUALIZAR_ESTADO,
                payload: JSON.parse(response.config.data)
            })
            limpiarProducto()
        } catch (error) {
            console.log(error)
        }
    }

    const eliminarProducto = async productoId => {
        try {
            const url = `http://localhost:5000/producto/${productoId}`
            await axios.delete(url)
            dispatch({
                type: ELIMINAR_PRODUCTO,
                payload: productoId
            })
            limpiarProducto()
        } catch (error) {
            console.log(error)
        }
    }

    const filtrarProducto = estado => {
        dispatch({
            type: FILTRAR_PRODUCTO,
            payload: estado
        })
    }

    const seleccionarProducto = producto => {
        dispatch({
            type: PRODUCTO_SELECCIONADO,
            payload: producto
        })
    }

    const limpiarProducto = () => {
        dispatch({
            type: LIMPIAR_PRODUCTO
        })
    }

    return (
        <productoContext.Provider
            value={{
                productos: state.productos,
                productoseleccionado: state.productoseleccionado,
                estadoproducto: state.estadoproducto,
                crearProducto,
                obtenerProductos,
                actualizarProducto,
                eliminarProducto,
                filtrarProducto,
                seleccionarProducto,
                actualizarEstado,
                limpiarProducto
            }}
        >
            {props.children}
        </productoContext.Provider>
    )

}

export default ProductoState