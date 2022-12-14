import React from 'react'
import { Link } from 'react-router-dom'
import ImageBanner from '../assets/banner1.jpg'


const Login = () => {
    return (
        <div className='banner' style={{ backgroundImage: `url(${ImageBanner})`,  backgroundPosition: 'center center'}}>
            <div className='signup-container'>
                <div><h2>Sign In</h2></div>
                <form>
                    <div><input placeholder='email'></input></div>
                    <div><input placeholder='password'></input></div>
                    <div><button className='btn-signup btn btn-dark btn-block text-white'>SIGN IN</button></div>
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