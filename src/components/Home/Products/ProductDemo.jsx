import React from 'react'
import { Link } from 'react-router-dom'
import { popupActions } from '../../../store/popup'

import './ProductDemo.css'

const formatCurrency = (num) => {
    return (+num).toLocaleString('vi')
}

const ProductDemo = (props) => {

    const clickHandler = () => {
        props.onShowModal(popupActions.showPopup({
            id: props.id,
            name: props.name,
            price: props.price,
            img: props.img1,
            description: props.description
        }))
    }

    return (
        <div className='col-xl-3 col-lg-4 col-sm-6'>
            <div className='position-relative mb-3' onClick={clickHandler}>
                <img className='product-image img-fluid' src={props.img1} alt='' />
            </div>
            <h6><Link to={`/detail/${props.id}`} className='reset-anchor' >{props.name}</Link></h6>
            <p className='small text-muted'>{formatCurrency(props.price)} VND</p>
        </div>
    )
}

export default ProductDemo