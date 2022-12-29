import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/auth'

import './Navbar.css'

const Navbar = () => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.auth.isLoggedIn)
    const currentUser = useSelector(state => state.auth.currentUser)

    const handlerLogout = () => {
        dispatch(authActions.onLogout())
    }
 
  return (
    <div className='navbar-container'>
        <nav className='navbar navbar-expand-lg navbar-light py-3 px-lg-0'>
            <div id='navbar' className='collapse navbar-collapse'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item nav-item-home' onClick={() => {}}>
                        <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li className='nav-item' onClick={() => {}}>
                        <Link className='nav-link' to='/shop'>Shop</Link>
                    </li>
                </ul>

                <Link className='navbar-brand' to='/'>
                    <span className='font-weight-bold text-uppercase text-dark'>
                        Boutique
                    </span>
                </Link>

                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/cart'><i class="fa fa-shopping-cart"></i> Cart</Link>
                    </li>
                    <li className='nav-item'>
                        {status ? 
                            <div>
                                <span><i class="fa fa-user"></i> {currentUser.name}!</span>
                                <span><button onClick={handlerLogout} className='btn-logout'>(Logout)</button></span>
                            </div>
                            : 
                            <Link className='nav-link' to='/login'>Login</Link>
                        }                
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar