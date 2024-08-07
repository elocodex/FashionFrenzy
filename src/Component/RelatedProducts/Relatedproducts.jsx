import React from 'react'
import './RelatedProducts.css'
import data_product from '../../../Assets/data'
import Item from '../items/Item'

const Relatedproducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
            })}
      </div>
    </div>
  )
}

export default Relatedproducts
