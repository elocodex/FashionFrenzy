import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../Component/items/Item'
import { motion } from 'framer-motion'

const ShopCategory = (props) => {
  const {allProduct} = useContext(ShopContext)
  let category = props.category.toUpperCase() + "'S"
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    style={{overflow:"hidden"}}
    className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />

      <div className="header">
        <h2> {category} PRODUCT LIST</h2>
      </div>
      <div className="products">
        <div className="shopcategory-products">
          {allProduct.map((item,i)=>{
              if(props.category === item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
              } else{
                return null;
              }
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default ShopCategory
