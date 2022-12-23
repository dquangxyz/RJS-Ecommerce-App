import { configureStore} from '@reduxjs/toolkit'

import popupSlice from './popup'
import authSlice from './auth'
import cartSlice from './cart'


// combine two slices
const store = configureStore({
    reducer: {
        auth: authSlice.reducer, 
        popup: popupSlice.reducer,
        cart: cartSlice.reducer 
    }
})

// exports
export default store