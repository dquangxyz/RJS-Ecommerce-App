/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Section from '../components/Layout/Section'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../store/cart';

const formatCurrency = (num) => {
    return (+num).toLocaleString('vi')
}

const Checkout = () => {
    // global state
    const cart = useSelector(state => state.cart.listCart)
    const { name: currentUserName, email: currentUserEmail, phone: currentUserPhone} = useSelector(state => state.auth.currentUser)
    const dispatch = useDispatch()

    // local state
    let total = 0 // to be displayed as total amount of the cart
    const [inputName, setInputName] = useState(currentUserName)
    const [inputEmail, setInputEmail] = useState(currentUserEmail)
    const [inputPhone, setInputPhone] = useState(currentUserPhone)
    const [inputAddress, setInputAddress] = useState("")
    const navigate = useNavigate()

    // handler functions
    const handlerPlaceOrder = (e) => {
        if ( inputName === "" || inputEmail === "" || inputPhone === "" || inputAddress === ""){
            alert("Please fill in the detail")
            e.preventDefault()
        } else if (!inputEmail.includes('@') ) {
            alert("Wrong email format - Please enter your email correctly again")
            e.preventDefault()
        } else if (/^\d+$/.test(inputPhone) === false) {
            alert("Phone number should only contains numbers")
            e.preventDefault()
        } else if (cart.length === 0) {
            alert("Your current cart is empty")
            e.preventDefault()
        } else {
            alert("Placed order successfully")
            dispatch(cartActions.clearCart())
            return navigate('/')
        }
    }
    
  return (
    <div className='checkout-container'>
        <Section title="Checkout" />
        
        <h2 className='h5 text-uppercase mb-4'>Billing details</h2>
        <div className='row'>
            <div className='col-lg-7'>
                <form>
                    <div className='checkout-form-wrapper row'>
                        <div className='col-lg-12 form-group'>
                            <label className='text-small text-uppercase' htmlFor='Fullname'>Full Name:</label>
                            <input
                                onChange={e=>setInputName(e.target.value)}
                                value={inputName}
                                className='form-control form-control-lg'
                                type='text'
                                placeholder='Enter Your Full Name Here!'
                            />
                        </div>
                        <div className='col-lg-12 form-group'>
                            <label className='text-small text-uppercase' htmlFor='Email'>Email:{' '}</label>
                            <input
                                onChange={e=>setInputEmail(e.target.value)}
                                value={inputEmail}
                                className='form-control form-control-lg'
                                type='text'
                                placeholder='Enter Your Email Here!'
                            />
                        </div>
                        <div className='col-lg-12 form-group'>
                            <label className='text-small text-uppercase' htmlFor='Phone'>Phone Number:{' '}</label>
                            <input
                                onChange={e=>setInputPhone(e.target.value)}
                                value={inputPhone}
                                className='form-control form-control-lg'
                                type='text'
                                placeholder='Enter Your Phone Number Here!'
                            />
                        </div>
                        <div className='col-lg-12 form-group'>
                            <label className='text-small text-uppercase' htmlFor='Address'>Address:{' '}</label>
                            <input
                                onChange={e=>setInputAddress(e.target.value)}
                                value={inputAddress}
                                className='form-control form-control-lg'
                                type='text'
                                placeholder='Enter Your Address Here!'
                            />
                        </div>
                        <div className='col-lg-12 form-group'>
                            <button className='btn btn-dark' style={{ color: 'white' }} onClick={handlerPlaceOrder}>Place order</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className='col-lg-5'>
                <div className='card border-0 rounded-0 p-lg-4 bg-light'>
                    <div className='card-body'>
                        <h5 className='text-uppercase'>Your order</h5>
                        <table className='checkout-summary'>
                            {cart.map(item => {
                                total += item.price * item.qty
                                return (
                                    <tr className='checkout-item'>
                                        <td className='checkout-item-name'>{item.name}</td>
                                        <td className='checkout-item-price'>{formatCurrency(item.price)} VND x {item.qty}</td>
                                    </tr>
                                )
                            })}
                            <tr className='checkout-summary-total'>
                                <td>TOTAL</td>
                                <td>{formatCurrency(total)} VND</td>
                            </tr>
                        </table>
                        
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Checkout