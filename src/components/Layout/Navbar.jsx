import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container px-0 px-lg-3'>
        <nav className='navbar navbar-expand-lg navbar-light py-3 px-lg-0'>
            <Link className='navbar-brand' to='/'>
                <span className='font-weight-bold text-uppercase text-dark'>
                    Boutique
                </span>
            </Link>
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
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/cart'>
                            <i className='fas fa-dolly-flatbed mr-1 text-gray'></i>
                            Cart
                        </Link>
                    </li>
                    {/* {nameUser ? <Name /> : ''}
                    {loginUser ? <LoginLink /> : <LogoutLink />} */}
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar