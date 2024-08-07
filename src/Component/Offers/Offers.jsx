import React from 'react'
import './Offers.css'
import exclusiveImage from '../../../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="container">
      <div className='offers'>
      <section className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button><a href="/mens">Check NOW</a></button>
      </section>
      <section className="offers-right">
        <img src={exclusiveImage} alt="" />
      </section>
    </div>
    </div>
  )
}

export default Offers
