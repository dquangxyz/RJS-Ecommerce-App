import React, { useState } from 'react'

import './SearchProduct.css'

const SearchProduct = (props) => {
    const [value, setValue] = useState('')

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.onSearch(value)
        }
    }

  return (
    <div className='col-lg-6 search-product-container'>
        <input 
            type='text' 
            placeholder='Enter Search Here'
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            onKeyDown={handleKeyDown}  
        />
    </div>
  )
}

export default SearchProduct