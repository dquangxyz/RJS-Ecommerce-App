import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/index'

const Navbar = () => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.auth.isLoggedIn)
    const currentUser = useSelector(state => state.auth.currentUser)

    const handlerLogout = () => {
        dispatch(authActions.onLogout())
    }
 
  return (
    <div className='container px-0 px-lg-3'>
        <nav className='navbar navbar-expand-lg navbar-light py-3 px-lg-0'>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item' onClick={() => {}}>
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
                        <Link className='nav-link' to='/cart'>
                            Cart
                        </Link>
                    </li>
                    <li className='nav-item'>
                        {status ? 
                            <Fragment>
                                <span>Welcome {currentUser.name}!</span>
                                <span onClick={handlerLogout}>Logout</span>
                            </Fragment>
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