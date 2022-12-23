import { createSlice } from '@reduxjs/toolkit'

// popup Slice to keep track when to show/hide the popup
const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        showStatus: false, 
        item: {
            id: "",
            name: "",
            price: "",
            img: "",
            description: ""
        }
    },
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

export const popupActions = popupSlice.actions
export default popupSlice