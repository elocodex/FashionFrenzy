import React, { createContext, useEffect, useState } from "react";
// import CartItems from "../Component/cartitems/CartItems";

export const ShopContext = createContext(null);

 // Create Empty Cart
const getDefaultCart = ()=>{
    let cart = {};
    for (let i = 0; i < 300 + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [allProduct,setAllProduct] = useState([])
    const [cartItems,setCartItems] = useState(getDefaultCart());
    useEffect(()=>{
        fetch('https://fashionfrenzybackend.onrender.com/allproduct')
        .then((res)=>res.json())
        .then((data)=>{setAllProduct(data)})

        if(localStorage.getItem('auth-token')){
            fetch('https://fashionfrenzybackend.onrender.com/getcart',{
                method:'POST',
                headers:{
                    Accept: 'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: "",
            })
            .then((res)=>res.json())
            .then((data)=>{setCartItems(data)})
        }
    },[])

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+ 1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://fashionfrenzybackend.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]- 1}))
        if(localStorage.getItem('auth-token')){
            console.log(itemId);
            fetch('https://fashionfrenzybackend.onrender.com/removefromcart',{
                method:'POST',
                headers:{
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }

  
    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                console.log(cartItems[item]);
                totalItem += cartItems[item]
            }
        }
        console.log(totalItem);
        return totalItem
    }
    
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                console.log(cartItems[item]);
                let itemInfo = allProduct.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        console.log(totalAmount);
        return totalAmount;
    }


    const contextValue = {allProduct,cartItems,addToCart,removeFromCart,getTotalCartItems,getTotalCartAmount};
    
   



    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;