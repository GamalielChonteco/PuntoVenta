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

export default (state, action) => {
    switch (action.type) {
        case OBTENER_PRODUCTOS:
            return {
                ...state,
                productos: action.payload
            }
        case FILTRAR_PRODUCTO:
            return {
                ...state,
                estadoproducto: action.payload
            }
        case PRODUCTO_SELECCIONADO:
            return {
                ...state,
                productoseleccionado: action.payload
            }
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }
        case ACTUALIZAR_ESTADO:
        case ACTUALIZAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.map(producto => producto.id === action.payload.id ? action.payload : producto)
            }
        case ELIMINAR_PRODUCTO:
            return{
                ...state,
                productos: state.productos.filter(producto => producto.id !== action.payload)
            }
        case LIMPIAR_PRODUCTO:
            return {
                ...state,
                productoseleccionado: null
            }
        default:
            return state
    }
}