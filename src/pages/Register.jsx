import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='signup-container'>
            <div><h2>Sign Up</h2></div>
            <form>
                <div><input placeholder='fullname'></input></div>
                <div><input placeholder='email'></input></div>
                <div><input placeholder='password'></input></div>
                <div><input placeholder='phone'></input></div>
                <div><button className='btn-signup btn btn-dark btn-block text-white'>SIGN UP</button></div>
            </form>
            <div>
                <span>Login?</span>
                <span><Link to='/login'>Click</Link></span>
            </div>        
        </div>
    )
}

export default Register