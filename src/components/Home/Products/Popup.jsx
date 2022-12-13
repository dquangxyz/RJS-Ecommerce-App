import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { popupActions } from '../../../store/index'

import './Popup.css'
const Popup = () => {
    const item = useSelector(state => state.popup.item) // return an object with keys: id, name, price, img, description
    const dispatch = useDispatch()
    
    return (
        <Fragment>
            <div className='product-modal'>
                <button id='btn-close' onClick={()=> dispatch(popupActions.hidePopup())}>X</button>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img className='product-image' src={item.img} alt='' />
                    </div>
                    <div className='col-lg-6'>
                        <div className='product-name'>{item.name}</div>
                        <div className='product-price'>{item.price}</div>
                        <div className='product-description'>{item.description}</div>
                    </div>
                </div>
            </div>
            <div className='product-overlay' onClick={()=> dispatch(popupActions.hidePopup())}></div>
        </Fragment>
    )
}

export default Popup