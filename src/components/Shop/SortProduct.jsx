import React from 'react'

import './SortProduct.css'

const SortProduct = () => {
  return (
    <div className='sort-product-container col-lg-6'>
        <select className='ml-auto'>
            <option value='default'>Default sorting</option>
            <option value='DownToUp'>Price: Low to High</option>
            <option value='UpToDown'>Price: High to Low</option>
        </select>
    </div>
  )
}

export default SortProduct