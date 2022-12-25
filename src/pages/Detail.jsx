import React, { useEffect, useState, Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../store/cart'

const Detail = () => {
    // local state
    const { id } = useParams()
    const [detailedProduct, setDetailedProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])
    const [qty, setQty] = useState(1)

    // global state
    const currentUser = useSelector(state => state.auth.currentUser)
    const currentCart = useSelector(state => state.cart.listCart)
    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchData = async () =>  {
            const res = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
            const data = await res.json()

            // find the chosen object based on the id
            let result = data.find(objt => objt._id.$oid === id) 
            setDetailedProduct(result)

            // find related product based on similar category and different id
            let relatedResults = data.filter(objt => objt.category === detailedProduct.category && objt._id.$oid !== id)
            setRelatedProducts(relatedResults)
        }
        fetchData()
    },[id, detailedProduct.category])

    // scroll to top on page load
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [id])

    

    // handler functions
    const handlerDecreaseQty = () => {
        if (qty > 0) {
            setQty(qty-1)
        }    
    }
    const handlerIncreaseQty = () => {
        setQty(qty+1)
    }
    const handlerAddToCart = () => {
        const currentItem = {
            userId: currentUser.email,
            item: {
                id: id,
                name: detailedProduct.name,
                price: detailedProduct.price,
                qty: qty,
                img: detailedProduct.img1
            }
        }
        dispatch(cartActions.addCart(currentItem))
    }


    return (
        <div className='detailed-product-container'>
            <div className='detailed-product-wrapper1'>      
                <div className='all-images'>
                    <img src={detailedProduct.img1} alt='' className='small-image'/>
                    <img src={detailedProduct.img2} alt='' className='small-image'/>
                    <img src={detailedProduct.img3} alt='' className='small-image'/>
                    <img src={detailedProduct.img4} alt='' className='small-image'/>
                </div>

                <div className='main-image'>
                    <img src={detailedProduct.img1} alt='' className='large-image'/>
                </div>

                <div className='main-details'>
                    <div><h1>{detailedProduct.name}</h1></div>
                    <div>{(+detailedProduct.price).toLocaleString('vi')} VND</div>
                    <div>{detailedProduct.short_desc}</div>
                    <div>CATEGORY: {detailedProduct.category}</div>
                    <div className=''>
                        <div className=''>
                            <div>
                                <span>Quantity</span>   
                                <span>
                                    <button className='btn-decrease' onClick={handlerDecreaseQty}>&#x25C2;</button>
                                    <input  type='text' value={qty}/>
                                    <button className='btn-increase' onClick={handlerIncreaseQty}>&#x25B8;</button>
                                </span>
                                <span>
                                    { currentCart.some(item => item.id === id) ? 
                                    <Fragment>
                                        <div className='item-existed'>&#10004; Item has already been added to the cart</div>
                                        <Link to={'/cart'} className='btn btn-dark btn-sm btn-block text-white'>
                                            View Cart
                                        </Link>
                                    </Fragment>
                                    :
                                    <button onClick={handlerAddToCart} className='btn btn-dark btn-sm btn-block text-white'>
                                        Add to cart
                                    </button>
                                    }
                                </span>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>

            <div className='detailed-product-wrapper2'>
                <button className='btn btn-dark btn-lg btn-block text-white'>Description</button>
                <div><h4>PRODUCT DESCRIPTION</h4></div>
                <div className='product-long-desc'>{detailedProduct.long_desc}</div>
                <div><h4>RELATED PRODUCTS</h4></div>
                <div className='related-products'>
                    {relatedProducts.map(item => (
                        <div>
                            <img src={item.img1} alt='' className='medium-image'/>
                            <Link to={`/detail/${item._id.$oid}`}><h6>{item.name}</h6></Link>
                            <div>{(+item.price).toLocaleString('vi')} VND</div> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Detail