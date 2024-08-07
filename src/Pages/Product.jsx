import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Component/BreadCrumbs/BreadCrum'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'
import Relatedproducts from '../Component/RelatedProducts/Relatedproducts'

const Product = () => {

  const {allProduct} = useContext(ShopContext)

  const {productId} = useParams()
  // console.log(productId)
  const product = allProduct.find((e)=>
    e.id === Number(productId)
  )
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      {/* <DescriptionBox /> */}
      <Relatedproducts />
    </div> 
  )
}

export default Product
