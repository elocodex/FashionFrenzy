import React, { useContext } from 'react'
import './ProductDisplay.css'
import starIcon from '../../../Assets/star_icon.png'
import starDullIcon from '../../../Assets/star_dull_icon.png'
import SpecialOffer from '../../../Assets/specialoffer.png'
import { ShopContext } from '../../context/ShopContext' 

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)

  return (
    <div className='cont'>
<div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1> {product.name} </h1>
            <div className="productdisplay-right-stars">
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starDullIcon} alt="" />
                <p> (122) </p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga blanditiis quidem ratione ea dolor ullam labore? Qui vero corrupti iste?
            </div>
            <div className="productdisplay-right-size">
                <img src={SpecialOffer} alt="" />
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category">
                <span>Category: </span> {product.category}
            </p>
            <p className="productdisplay-right-category">
                <span>Tags: </span> Modern, Latest
            </p>
        </div>
    </div>
    </div>
  )
}

export default ProductDisplay
