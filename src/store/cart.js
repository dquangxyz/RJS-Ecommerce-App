import { createSlice } from '@reduxjs/toolkit'

// local storage
const saveLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}
const currentCart = getFromStorage("currentCart") ? getFromStorage("currentCart") : { userId: "", listCart: []}

// cart Slice to keep track when to add/update/delete cart
const cartSlice = createSlice({
    name: 'cart',
    initialState: currentCart,
    reducers: {
        addCart(state, action){
            state.userId = action.payload.userId
            state.listCart.push(action.payload.item)          
            saveLocalStorage('currentCart', state)
        },
        updateCart(state, action){
            //
        },
        deleteCart(state){
            //
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice