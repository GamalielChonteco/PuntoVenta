import {
    OBTENER_LINEAS,
    AGREGAR_LINEA,
    ACTUALIZAR_LINEA,
    ELIMINAR_LINEA,
    LINEA_SELECCIONADA,
    LIMPIAR_LINEA
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case OBTENER_LINEAS:
            return {
                ...state,
                lineas: action.payload
            }
        case AGREGAR_LINEA:
            return {
                ...state,
                lineas: [...state.lineas, action.payload]
            }
        case ACTUALIZAR_LINEA:
            return {
                ...state,
                lineas: state.lineas.map(linea => linea.id === action.payload.id ? action.payload : linea)
            }
        case ELIMINAR_LINEA:
            return {
                ...state,
                lineas: state.lineas.filter(linea => linea.id !== action.payload)
            }
        case LINEA_SELECCIONADA:
            return {
                ...state,
                lineaseleccionada: action.payload
            }
        case LIMPIAR_LINEA:
            return {
                ...state,
                lineaseleccionada: null
            }
        default:
            return state
    }
}