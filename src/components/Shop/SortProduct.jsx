/* eslint-disable default-case */
import React from 'react'

import './SortProduct.css'

const SortProduct = (props) => {
    const sortHandler = (e) => {
        let cloneProducts = [...props.products]
        switch (e.target.value){
            case 'low-to-high':
                cloneProducts.sort((a,b) => {
                    return ((+a.price) - (+b.price))
                })
                props.onSort(cloneProducts)
                break
            case 'high-to-low':
                cloneProducts.sort((a,b) => {
                    return ((+b.price) - (+a.price))
                })
                props.onSort(cloneProducts)
                break
            case 'default':
                cloneProducts.sort((a,b) => {
                    return  a._id.$oid.localeCompare(b._id.$oid)
                })
                props.onSort(cloneProducts)
                break
        }
    }
    
  return (
    <div className='sort-product-container col-lg-6'>
        <select className='ml-auto' onChange={sortHandler}>
            <option value='default'>Default sorting</option>
            <option value='low-to-high'>Price: Low to High</option>
            <option value='high-to-low'>Price: High to Low</option>
        </select>
    </div>
  )
}

export default SortProduct