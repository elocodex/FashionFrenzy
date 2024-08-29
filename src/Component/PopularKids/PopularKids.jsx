import React, { useEffect, useState } from 'react'
import './PopularKids.css'
import Item from '../items/Item'

const PopularKids = () => {

  const [popularProducts, SetPopularProducts] = useState([])
  useEffect(()=>{
    fetch('https://fashionfrenzybackend.onrender.com/popularinkids')
    .then((res)=>res.json())
    .then((data)=>{
      SetPopularProducts(data)
    })
  },[])
  return (
    <div className='popular' style={{width:"100%",marginLeft:"0px"}}>
        <h1>POPULAR IN KIDS</h1>
        <div className="hr-container">
        <hr />
        </div>
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default PopularKids
