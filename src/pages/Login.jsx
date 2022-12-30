import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth'
import ImageBanner from '../assets/banner1.jpg'

// local storage
const saveLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const Login = () => {
    let navigate = useNavigate();
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const dispatch = useDispatch()

    const handlerClickSignin = () => {
        const userArr = getFromStorage("userArr") ? getFromStorage("userArr") : [];
        const result = userArr.find(item => item.email === inputEmail)
        if (result !== undefined){
            if (result.password === inputPassword){
                // if successful, dispatch action 'onLogin' and send in some data (or payload)
                // saveLocalStorage("currentSession", result)
                dispatch(authActions.onLogin(result))
                return navigate("/")
            } else {
                alert("Wrong password")
                setInputPassword("")
            }    
        } else {
            alert("No account found -please sign up")
            setInputEmail("")
            setInputPassword("")
        }
    }

    return (
        <div className='signin-signup-container' style={{'backgroundImage': `url(${ImageBanner})`}}>
            <div className='signin-signup-wrapper'>
                <div><h2>Sign In</h2></div>
                <form onSubmit={e => e.preventDefault()}>
                    <div><input onChange={e=> setInputEmail(e.target.value)} value={inputEmail} placeholder='email'></input></div>
                    <div><input onChange={e=> setInputPassword(e.target.value)} value={inputPassword} type='password' placeholder='password'></input></div>
                    <div>
                        <button 
                            className='btn-signup btn btn-dark btn-block text-white'
                            onClick={handlerClickSignin}
                        >
                            SIGN IN
                        </button>
                    </div>
                </form>
                <div>
                    <span>Create an account?</span>
                    <span><Link to='/register'>Click</Link></span>
                </div>   
            </div>     
        </div>
    )
}

export default Login