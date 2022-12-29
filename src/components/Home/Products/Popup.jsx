import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { popupActions } from '../../../store/popup'

import './Popup.css'

const formatCurrency = (num) => {
    return (+num).toLocaleString('vi')
}

const Popup = () => {
    const item = useSelector(state => state.popup.item) // return an object with keys: id, name, price, img, description
    const dispatch = useDispatch()
    
    return (
        <Fragment>
            <div className='product-modal'>
                <button id='btn-close' onClick={()=> dispatch(popupActions.hidePopup())}>X</button>
                <div className='row'>
                    <div className='col-lg-7'>
                        <img className='popup-product-image' src={item.img} alt='' />
                    </div>
                    <div className='col-lg-5'>
                        <div className='popup-product-name'>{item.name}</div>
                        <div className='popup-product-price'>{formatCurrency(item.price)} VND</div>
                        <div className='popup-product-description'>{item.description}</div>
                        <div id='btn-view-detail'>
                            <a href={`/detail/${item.id}`} className='btn btn-dark' >
                                <i className='fa fa-shopping-cart'></i>
                                <span className='ml-2'>View Detail</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className='product-overlay' onClick={()=> dispatch(popupActions.hidePopup())}></div>
        </Fragment>
    )
}

export default Popup