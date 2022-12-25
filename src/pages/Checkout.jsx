/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Section from '../components/Layout/Section'
import { useSelector } from 'react-redux'

const formatCurrency = (num) => {
    return (+num).toLocaleString('vi')
}

const Checkout = () => {
    // global state
    const cart = useSelector(state => state.cart.listCart)

    // local state
    let total = 0
    
  return (
    <div className='checkout-container'>
        <Section title="Checkout" />
        <h2 className='h5 text-uppercase mb-4'>Billing details</h2>
        <div className='row'>
            <div className='col-lg-8'>
                <form>
                    <div className='row'>
                        <div className='col-lg-12 form-group'>
                            <label className='text-small text-uppercase' htmlFor='Fullname'>Full Name:</label>
                            <input
                                className='form-control form-control-lg'
                                type='text'
                                placeholder='Enter Your Full Name Here!'
                            />
                        </div>
                        <div className='col-lg-12 form-group'>
                            <label className='text-small text-uppercase' htmlFor='Email'>Email:{' '}</label>
                            <input
                                className='form-control form-control-lg'
                                type='text'
                                placeholder='Enter Your Email Here!'
                            />
                        </div>
                        <div className='col-lg-12 form-group'>
                            <label className='text-small text-uppercase' htmlFor='Phone'>Phone Number:{' '}</label>
                            <input
                                className='form-control form-control-lg'
                                type='text'
                                placeholder='Enter Your Phone Number Here!'
                            />
                        </div>
                        <div className='col-lg-12 form-group'>
                            <label className='text-small text-uppercase' htmlFor='Address'>Address:{' '}</label>
                            <input
                                className='form-control form-control-lg'
                                type='text'
                                placeholder='Enter Your Address Here!'
                            />
                        </div>
                        <div className='col-lg-12 form-group'>
                            <a className='btn btn-dark' style={{ color: 'white' }} type='submit'>Place order</a>
                        </div>
                    </div>
                </form>
            </div>

            <div className='col-lg-4'>
                <div className='card border-0 rounded-0 p-lg-4 bg-light'>
                    <div className='card-body'>
                        <h5 className='text-uppercase mb-4'>Your order</h5>
                        <table className='checkout-summary' cellspacing="0" cellpadding="0">
                            {cart.map(item => {
                                total += item.price * item.qty
                                return (
                                    <tr className='checkout-item'>
                                        <td className='checkout-item-name'>{item.name}</td>
                                        <td className='checkout-item-price'>{formatCurrency(item.price)} VND x {item.qty}</td>
                                    </tr>
                                )
                            })}
                            <tr>
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