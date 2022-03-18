import React from 'react'
import Cart from '../../containers/Cart';
import ProductList from '../../containers/ProductList';

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-8">
        <ProductList />
      </div>
      <div className="col-md-4">
        <Cart />
      </div>
    </div>
  )
}

export default Home;