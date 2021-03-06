import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import UserReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import categoriesReducer from './categories/categories.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)