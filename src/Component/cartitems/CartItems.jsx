import React, { useContext, useEffect, useState } from 'react'
import './cartitems.css'
import { ShopContext } from '../../context/ShopContext'
import removeIcon from '../../../Assets/cart_cross_icon.png'
import { toast ,Toaster } from 'sonner'

const CartItems = () => {
    const {allProduct,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
    const [cart,setCart] = useState(false)
    const [cardDetails,SetCardDetails] = useState([])

    const getCardDetails = async ()=>{
        await fetch('https://fashionfrenzybackend.onrender.com/getCardDetails',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
                'auth-token': `${localStorage.getItem('auth-token')}`,
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            SetCardDetails(data.card)
        })
    }

    const noti = ()=>{
        getCardDetails()
        if(cardDetails.length < 1){
            toast.warning("Provide Card Details Before Proceeding to Checkout!")
        }else if(cart == false){
            toast.warning("Cart is Empty!")
        }else{
            const promise = () => new Promise((resolve) => setTimeout(() => resolve(), 3000));
            toast.promise(promise, {
            loading: 'Loading...',
            success:"Purchase Completed! Check Email for details.",
            error: 'Error during This Process, Try Again Later',
            });
        }
    }

    useEffect(() => {
        const hasItems = allProduct.some((e) => cartItems[e.id] > 0);
        setCart(hasItems);
    }, [allProduct, cartItems]);


   

  return (
    <div className='cartitems'>
        <Toaster position='bottom-right' closeButton richColors  />
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
            {allProduct.map((e)=>{
                if(cartItems[e.id] > 0){
                    return <div key={e.id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id] } </p>
                        <img className='carticon-remove-icon' src={removeIcon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr className='hrr'/>
                </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={noti}>Proceed to Checkout</button>
                </div>
                <div className="cartitems-promoode">
                    <p>If you have a Promo Code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo Code' />
                        <button >Submit</button>
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default CartItems
