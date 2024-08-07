import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
         <img src={props.image} alt={props.name} onClick={window.scrollTo(0,0)}  /> </Link>
      <p> {props.name} </p>
      <div className="item-prices">
        <div className="item-price-new">
            ${props.newPrice}
        </div>
        <div className="item-price-old">
            ${props.oldPrice}
        </div>
      </div>
    </div>
  )
}

export default Item
