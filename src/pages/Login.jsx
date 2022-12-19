import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/index'
import { userArr, saveLocalStorage } from '../store/local-storage'
import ImageBanner from '../assets/banner1.jpg'



const Login = () => {
    let navigate = useNavigate();
    const emailRef = useRef()
    const passwordRef = useRef()

    const dispatch = useDispatch()
    const status = useSelector(state => state.auth.isLoggedIn)
    const currentUser = useSelector(state => state.auth.currentUser)

    const handlerClickSignin = () => {
        const result = userArr.find(item => item.email === emailRef.current.value)
        if (result !== undefined){
            if (result.password === passwordRef.current.value){
                // if successful, dispatch action 'onLogin' and send in some data (or payload)
                // saveLocalStorage("currentSession", result)
                dispatch(authActions.onLogin(result))
                return navigate("/")
            } else {
                alert("Wrong password")
            }    
        } else {
            alert("No account found -please sign up")
            return navigate("/register")
        }
    }

    return (
        <div style={{ backgroundImage: `url(${ImageBanner})`,  backgroundPosition: 'center center'}}>
            <div className='signup-container'>
                <div><h2>Sign In</h2></div>
                <form onSubmit={e => e.preventDefault()}>
                    <div><input ref={emailRef} placeholder='email'></input></div>
                    <div><input ref={passwordRef} type='password' placeholder='password'></input></div>
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