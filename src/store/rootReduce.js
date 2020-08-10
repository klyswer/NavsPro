import initialState from './initialState'
import {GET_ALL_PRODUCTS, MOSTRAR_TODO, FILTRAR_LISTA} from './actionTypes'

export const reducerProduct = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS: 
            return{
                ...state,
                listProduct: action.listRoot,
                listRoot: action.listRoot 
            }
        case FILTRAR_LISTA:
            return {
                ...state,
                listProduct: state.listRoot.filter(item => item.cat === action.cat)
            }
        case MOSTRAR_TODO:
            return {
                ...state,
                listProduct: state.listRoot
            }
        default:
            return state
    }
}


