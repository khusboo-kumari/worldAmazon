import React from 'react'
import ProductCard from '../Home/ProductCard';

const Search = () => {
    const resultProducts = [];
  return (
    <div>
      <div className='search-container w-[240px] bg-white'>
        side content
      </div>

      <div>
        {resultProducts.map((item)=>(
          <ProductCard data={item} key={item.product_id}/>
        ))}
      </div>
    </div>
  )
}

export default Search
