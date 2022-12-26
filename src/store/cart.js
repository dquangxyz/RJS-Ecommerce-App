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
            const i = state.listCart.findIndex(item => item.id === action.payload.id)
            state.listCart[i].qty = action.payload.qty
            saveLocalStorage('currentCart', state)
        },
        deleteCart(state, action){
            const i = state.listCart.findIndex(item => item.id === action.payload.id)
            state.listCart.splice(i, 1)
            saveLocalStorage('currentCart', state)
        },
        clearCart(state){
            localStorage.removeItem('currentCart')
            state = []
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice