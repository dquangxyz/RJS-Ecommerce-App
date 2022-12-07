import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { popupActions } from '../../../store/index'
import ProductDemo from './ProductDemo'
import Popup from './Popup'
import './ProductList.css'

const ProductList = () => {
    const [productList, setproductList] = useState([])
    const showStatus = useSelector(state => state.popup.showStatus)
    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchData = async () =>  {
            const res = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
            const data = await res.json()
            setproductList(data)
        }
        fetchData()
    },[])

    return (
        <div className='product-list-container'>
            <p className='small text-muted small text-uppercase mb-1'>Made the hard way</p>
            <h2 className='h5 text-uppercase mb-4'>Top trending products</h2>
            <div className='row'>
                {productList && productList.map((item) => (
                    <ProductDemo 
                        id={item._id.$oid}
                        category={item.category}
                        name={item.name}
                        img1={item.img1}
                        price={item.price}
                        description={item.long_desc}
                        onShowModal={(action)=> dispatch(action)}
                    />
                ))}          
                { showStatus && <Popup /> }
            </div>
        </div>
    )
}

export default ProductList