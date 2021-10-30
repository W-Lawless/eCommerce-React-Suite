import cartActionTypes from './cart.types'
import { addItemToCart, decrementItem, incrementItem  } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            console.log('fired')
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: 
                    state
                    .cartItems
                    .filter(item => item.id !== action.payload.id)
            }
        case cartActionTypes.DECREMENT_ITEM:
            return {
                ...state,
                cartItems: decrementItem(state.cartItems, action.payload)
            }
        case cartActionTypes.INCREMENT_ITEM:
            return {
                ...state,
                cartItems: incrementItem(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer