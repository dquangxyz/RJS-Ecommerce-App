import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ListCart from '../components/Cart/ListCart'
import Section from '../components/Layout/Section'

const Cart = () => {
    // local state
    const [total, setTotal] = useState()

    const navigate = useNavigate()



  return (
    <div className='container'>
        <Section title="Cart" />
        <section className='py-5'>
            <h2 className='h5 text-uppercase mb-4'>Shopping cart</h2>
            <div className='row'>
                <div className='col-lg-8 mb-4 mb-lg-0'>
                    <ListCart onCalculate={(data)=>setTotal(data)} />

                    <div className='bg-light px-4 py-3'>
                        <div className='row align-items-center text-center'>
                            <div className='col-md-6 mb-3 mb-md-0 text-md-left'>
                                <Link to={`/shop`} className='btn btn-link p-0 text-dark btn-sm'>
                                    Continue shopping
                                </Link>
                            </div>
                            <div className='col-md-6 text-md-right'>
                                <span onClick={() => navigate('/checkout')} className='btn btn-outline-dark btn-sm'>Proceed to checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card border-0 rounded-0 p-lg-4 bg-light'>
                        <div className='card-body'>
                            <h5 className='text-uppercase mb-4'>Cart total</h5>
                            <ul className='list-unstyled mb-0'>
                                <li className='d-flex align-items-center justify-content-between'>
                                    <strong className='text-uppercase small font-weight-bold'>Subtotal</strong>
                                    <span className='text-muted small'>{total} VND</span>
                                </li>
                                <li className='border-bottom my-2'></li>
                                <li className='d-flex align-items-center justify-content-between mb-4'>
                                    <strong className='text-uppercase small font-weight-bold'>Total</strong>
                                    <span>{total} VND</span>
                                </li>
                            </ul>
                            <input className='cart-coupon-input' type='text' placeholder='Enter your coupon'/>
                            <button className='cart-coupon-button btn btn-dark text-white'><i class="fa fa-gift" aria-hidden="true"></i> Apply coupon</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Cart