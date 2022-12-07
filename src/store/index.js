import { createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {
    showStatus: false, 
    item: {
        id: "",
        name: "",
        price: "",
        img: "",
        description: ""
    }
}
const popupSlice = createSlice({
    name: 'popup',
    initialState: initialState,
    reducers: {
        showPopup(state, action){
            state.showStatus = true
            state.item = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                img: action.payload.img,
                description: action.payload.description
            }
            document.body.style.overflow = 'hidden'
        },
        hidePopup(state){
            state.showStatus = false
            document.body.style.overflow = 'unset'
        }
    }
})

const store = configureStore({
    reducer: { popup: popupSlice.reducer }
})

export const popupActions = popupSlice.actions
export default store