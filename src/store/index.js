import { createSlice, configureStore} from '@reduxjs/toolkit'
import { currentSession, saveLocalStorage } from './local-storage'

// auth Slice to keep track of login/logout status
const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        isLoggedIn: currentSession.email === "" ? false : true,
        currentUser: { 
            name: currentSession.name,
            email: currentSession.email,
            password: currentSession.password,
            phone: currentSession.phone
        }
    },
    reducers: {
        onLogin(state, action) {
            state.isLoggedIn = true
            state.currentUser.name = action.payload.name
            state.currentUser.email = action.payload.email
            state.currentUser.password = action.payload.password
            state.currentUser.phone = action.payload.phone
            saveLocalStorage("currentSession", state.currentUser)
        },
        onLogout(state) {
            state.isLoggedIn = false
            state.currentUser.name = ""
            state.currentUser.email = ""
            state.currentUser.password = ""
            state.currentUser.phone = ""
            saveLocalStorage("currentSession", state.currentUser)
        }
    }
})

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

// combine two slices
const store = configureStore({
    reducer: {
        auth: authSlice.reducer, 
        popup: popupSlice.reducer 
    }
})

// exports
export const authActions = authSlice.actions
export const popupActions = popupSlice.actions
export default store