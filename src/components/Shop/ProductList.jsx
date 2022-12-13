/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './ProductList.css'

const ProductList = () => {
    const [productList, setproductList] = useState([])
	const [sortedProducts, setSortedProducts] = useState([])

    useEffect(()=>{
        const fetchData = async () =>  {
            const res = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
            const data = await res.json()
            setproductList(data)
			setSortedProducts(data)
        }
        fetchData()
    },[])

	// filter products by category
	const categoryHandler = (name) => {
		let results = productList.filter(objt => objt.category === name)
		setSortedProducts(results)
	}

    return (
        <Fragment>
			<div className='container row'>
				<div className='row col-3'>
					<div>
						<h5 className='text-uppercase mb-4'>Categories</h5>
						<div className='py-2 px-4 bg-dark text-white mb-3'>
							<strong className='small text-uppercase font-weight-bold'>Apple</strong>
						</div>
						<ul className='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
							<li className='mb-2'><a className='reset-anchor'href='#' onClick={() => setSortedProducts(productList)}>All</a></li>
						</ul>
						<div className='py-2 px-4 bg-light mb-3'>
							<strong className='small text-uppercase font-weight-bold'>Iphone & Mac</strong>
						</div>
						<ul className='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
							<li className='mb-2'><a className='reset-anchor' href='#' onClick={() => categoryHandler('iphone')}>IPhone</a></li>
							<li className='mb-2'><a className='reset-anchor' href='#' onClick={() => categoryHandler('ipad')}>Ipad</a></li>
							<li className='mb-2'><a className='reset-anchor' href='#' onClick={() => categoryHandler('macbook')}>Macbook</a></li>
						</ul>
						<div className='py-2 px-4 bg-light mb-3'>
							<strong className='small text-uppercase font-weight-bold'>Wireless</strong>
						</div>
						<ul className='list-unstyled small text-muted pl-lg-4 font-weight-normal'>
							<li className='mb-2'><a className='reset-anchor' href='#' onClick={() => categoryHandler('airpod')}>Airpod</a></li>
							<li className='mb-2'><a className='reset-anchor' href='#' onClick={() => categoryHandler('watch')}>Watch</a></li>
						</ul>
						<div className='py-2 px-4 bg-light mb-3'>
							<strong className='small text-uppercase font-weight-bold'>Other</strong>
						</div>
						<ul className='list-unstyled small text-muted pl-lg-4 font-weight-normal mb-5'>
							<li className='mb-2'><a className='reset-anchor' href='#' onClick={() => categoryHandler('mouse')}>Mouse</a></li>
							<li className='mb-2'><a className='reset-anchor 'href='#' onClick={() => categoryHandler('keyboard')}>Keyboard</a></li>
							<li className='mb-2'><a className='reset-anchor' href='#' onClick={() => categoryHandler('other')}>Other</a></li>
						</ul>
					</div>
				</div>

				<div className='row col-9'>
					<p className='small text-muted small text-uppercase mb-1'>Made the hard way</p>
					<h2 className='h5 text-uppercase mb-4'>Top trending products</h2>
					<div className='row'>
						{sortedProducts.map((item) => (
							<div className='col-lg-4 col-sm-6'>
								<div className='position-relative mb-3'>
									<img className='product-image img-fluid' src={item.img1} alt='' />
								</div>
								<h6>
									<Link to={`/detail/${item._id.$oid}`}	className='reset-anchor' >
										{item.name}
									</Link>
								</h6>
								<p className='small text-muted'>{(+item.price).toLocaleString('vi')} VND</p>
							</div>
						))}
					</div>
				</div>
			</div>
        </Fragment>
    )
}

export default ProductList