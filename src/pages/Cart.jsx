import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ListCart from '../components/Cart/ListCart'

const Cart = () => {
    const [total, setTotal] = useState()
    const [cart, setCart] = useState([])

  return (
    <div className='container'>
        <section className='py-5 bg-light'>
            <div className='container'>
                <div className='row px-4 px-lg-5 py-lg-4 align-items-center'>
                    <div className='col-lg-6'>
                        <h1 className='h2 text-uppercase mb-0'>Cart</h1>
                    </div>
                    <div className='col-lg-6 text-lg-right'>
                        <nav aria-label='breadcrumb'>
                            <ol className='breadcrumb justify-content-lg-end mb-0 px-0'>
                                <li className='breadcrumb-item active' aria-current='page'>Cart</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-5'>
            <h2 className='h5 text-uppercase mb-4'>Shopping cart</h2>
            <div className='row'>
                <div className='col-lg-8 mb-4 mb-lg-0'>
                    <ListCart listCart={cart} />

                    <div className='bg-light px-4 py-3'>
                        <div className='row align-items-center text-center'>
                            <div className='col-md-6 mb-3 mb-md-0 text-md-left'>
                                <Link to={`/shop`} className='btn btn-link p-0 text-dark btn-sm'>
                                    Continue shopping
                                </Link>
                            </div>
                            <div className='col-md-6 text-md-right'>
                                <span className='btn btn-outline-dark btn-sm'>Proceed to checkout</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Cart