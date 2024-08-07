import React from 'react'
import CartItems from '../Component/cartitems/CartItems'
import CardDetails from '../Component/CardDetails/CardDetails'
import ShippingDetails from '../Component/ShippingDetails/ShippingDetails'

const Cart = () => {
  return (
    <div>
      <ShippingDetails />
      <CardDetails />
      <CartItems />
      
    </div>
  )
}

export default Cart
