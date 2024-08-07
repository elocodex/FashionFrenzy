import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import NewCollections from '../Component/NewCollections/NewCollections'
import './CSS/Shop.css'
import PopularMen from '../Component/PopularMen/PopularMen'
import PopularKids from '../Component/PopularKids/PopularKids'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <PopularMen />
      <PopularKids />
      {/* <Offers /> */}
      <NewCollections />
    </div>
  )
}

export default Shop
