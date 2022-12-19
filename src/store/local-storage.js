// local storage
export const saveLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
export const getFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}
export const userArr = getFromStorage("userArr") ? getFromStorage("userArr") : [];

export const currentSession = getFromStorage("currentSession") ? getFromStorage("currentSession") : {name: "", email: "", password: "", phone: ""};