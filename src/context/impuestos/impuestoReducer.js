import {
    OBTENER_IMPUESTOS, 
    AGREGAR_IMPUESTO, 
    ACTUALIZAR_IMPUESTO, 
    ELIMINAR_IMPUESTO, 
    IMPUESTO_SELECCIONADO,
    LIMPIAR_IMPUESTO
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case OBTENER_IMPUESTOS:
            return {
                ...state,
                impuestos: action.payload
            }
        case AGREGAR_IMPUESTO:
            return {
                ...state,
                impuestos: [...state.impuestos, action.payload]
            }
        case ACTUALIZAR_IMPUESTO:
            return {
                ...state,
                impuestos: state.impuestos.map(impuesto => impuesto.id === action.payload.id ? action.payload : impuesto)
            }
        case ELIMINAR_IMPUESTO:
            return {
                ...state,
                impuestos: state.impuestos.filter(impuesto => impuesto.id !== action.payload)
            }
        case IMPUESTO_SELECCIONADO:
            return {
                ...state,
                impuestoseleccionado: action.payload
            }
        case LIMPIAR_IMPUESTO:
            return {
                ...state,
                impuestoseleccionado: null
            }
        default:
            return state
    }
}