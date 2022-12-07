import React from 'react'
import ImageBanner from '../../../assets/banner1.jpg'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner' style={{ backgroundImage: `url(${ImageBanner})`,  backgroundPosition: 'center center'}}>
        <div className='banner-content col-lg-6'>
            <p className='text-muted small text-uppercase mb-2'>New Inspiration 2020</p>
            <h1 className='h2 text-uppercase mb-3'>20% off on new season</h1>
            <a className='btn btn-dark' href='./shop'>Browse collections</a>
        </div>
    </div>
  )
}

export default Banner