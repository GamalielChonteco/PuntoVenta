import {
    OBTENER_CLIENTES,
    CLIENTE_SELECCIONADO,
    AGREGAR_CLIENTE,
    ACTUALIZAR_CLIENTE,
    LIMPIAR_CLIENTE,
    ELIMINAR_CLIENTE
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case OBTENER_CLIENTES:
            return {
                ...state,
                clientes: action.payload
            }
        case CLIENTE_SELECCIONADO:
            return {
                ...state,
                clienteseleccionado: action.payload
            }
        case AGREGAR_CLIENTE:
            return {
                ...state,
                clientes: [...state.clientes, action.payload]
            }
        case ACTUALIZAR_CLIENTE:
            return {
                ...state,
                clientes: state.clientes.map(cliente => cliente.id === action.payload.id ? action.payload : cliente)
            }
        case ELIMINAR_CLIENTE:
            return{
                ...state,
                clientes: state.clientes.filter(cliente => cliente.id !== action.payload)
            }
        case LIMPIAR_CLIENTE:
            return {
                ...state,
                clienteseleccionado: null
            }
        default:
            return state
    }
}