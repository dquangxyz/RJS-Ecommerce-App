import { createSlice } from '@reduxjs/toolkit'

// local storage
const saveLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}
const currentSession = getFromStorage("currentSession") ? getFromStorage("currentSession") : {name: "", email: "", password: "", phone: ""};



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

export const authActions = authSlice.actions
export default authSlice