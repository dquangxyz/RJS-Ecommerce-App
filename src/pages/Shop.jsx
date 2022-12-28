import ProductList from '../components/Shop/ProductList'
import Section from '../components/Layout/Section'

const Shop = () => {
  return (
    <div className='container'>
      <Section title="Shop" />
      <ProductList />
    </div>
  )
}

export default Shop