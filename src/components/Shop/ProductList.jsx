/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import SearchProduct from './SearchProduct'
import SortProduct from './SortProduct'
import './ProductList.css'

const ProductList = () => {
    const [productList, setproductList] = useState([])
	const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        const fetchData = async () =>  {
            const res = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
            const data = await res.json()
            setproductList(data)
			setFilteredProducts(data)
        }
        fetchData()
    },[])

	// Handler functions
	// filter products by category
	const categoryHandler = (cate_name) => {
		let results = productList.filter(objt => objt.category === cate_name)
		setFilteredProducts(results)
	}
	// search products
	const searchHandler = (data) => {
		if (data !== ''){
			let results = productList.filter(objt => objt.name.toLowerCase().includes(data.toLowerCase()))
			setFilteredProducts(results)
		}
	}
	// sort low-to-high or high-to-low
	const sortHandler = (data) => {
		console.log(data)
		setFilteredProducts(data)
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
							<li className='mb-2'><a className='reset-anchor'href='#' onClick={() => setFilteredProducts(productList)}>All</a></li>
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
					<SearchProduct onSearch={searchHandler}/>

					<SortProduct products={filteredProducts} onSort={sortHandler}/>

					{filteredProducts.map((item) => (
						<div className='col-lg-4 col-sm-6'>
							<Link to={`/detail/${item._id.$oid}`}>
								<div className='position-relative mb-3'>
									<img className='product-image img-fluid' src={item.img1} alt='' />
								</div>
								<h6>{item.name}</h6>
							</Link>
							<p className='small text-muted'>{(+item.price).toLocaleString('vi')} VND</p>
						</div>
					))}
				</div>
			</div>
        </Fragment>
    )
}

export default ProductList