import {
    OBTENER_USUARIOS,
    USUARIO_SELECCIONADO,
    AGREGAR_USUARIO,
    ACTUALIZAR_USUARIO,
    LIMPIAR_USUARIO,
    ELIMINAR_USUARIO
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case OBTENER_USUARIOS:
            return {
                ...state,
                usuarios: action.payload
            }
        case USUARIO_SELECCIONADO:
            return {
                ...state,
                usuarioseleccionado: action.payload
            }
        case AGREGAR_USUARIO:
            return {
                ...state,
                usuarios: [...state.usuarios, action.payload]
            }
        case ACTUALIZAR_USUARIO:
            return {
                ...state,
                usuarios: state.usuarios.map(usuario => usuario.id === action.payload.id ? action.payload : usuario)
            }
        case ELIMINAR_USUARIO:
            return{
                ...state,
                usuarios: state.usuarios.filter(usuario => usuario.id !== action.payload)
            }
        case LIMPIAR_USUARIO:
            return {
                ...state,
                usuarioseleccionado: null
            }
        default:
            return state
    }
}