import React, { Fragment } from 'react'
import Banner from '../components/Home/Banner/Banner'
import CategoryList from '../components/Home/CategoryList/CategoryList'
import ProductList from '../components/Home/Products/ProductList'
import Services from '../components/Home/OtherServices/Services'

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <CategoryList />
      <ProductList />
      <Services />
    </Fragment>
  )
}

export default Home