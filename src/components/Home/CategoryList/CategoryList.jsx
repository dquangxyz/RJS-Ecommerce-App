import React from 'react'
import Image1 from '../../../assets/product_1.png'
import Image2 from '../../../assets/product_2.png'
import Image3 from '../../../assets/product_3.png'
import Image4 from '../../../assets/product_4.png'
import Image5 from '../../../assets/product_5.png'

import './CategoryList.css'

const CategoryList = () => {
  return (
    <div className='category-list'>
        <div className='category-list-row row gx-3'>
            <a href='/shop' className='category col-sm-12 col-md-6'><img src={Image1} alt='' /></a>
            <a href='/shop' className='category col-sm-12 col-md-6'><img src={Image2} alt='' /></a>
        </div>
        <div className='category-list-row row gx-4 gy-4'>
            <a href='/shop' className='category col-sm-12 col-md-4'><img src={Image3} alt='' /></a>
            <a href='/shop' className='category col-sm-12 col-md-4'><img src={Image4} alt='' /></a>
            <a href='/shop' className='category col-sm-12 col-md-4'><img src={Image5} alt='' /></a>
        </div>
    </div>
  )
}

export default CategoryList