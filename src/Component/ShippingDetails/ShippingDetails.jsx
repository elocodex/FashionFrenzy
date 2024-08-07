import React, { useEffect, useState } from 'react'
import './ShippingDetails.css'

const ShippingDetails = () => {

  
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
            console.log(data.card);
            SetCardDetails(data.card)
        })
    }

    window.addEventListener('load', ()=>{
        getCardDetails()
    })

    
  return (
    <div className='shipping' onLoad={getCardDetails}>
        <h3>Shipping Details</h3>
        <p onClick={getCardDetails} className='refresh'>Refresh Shipping Details <i class="fa-solid fa-arrows-rotate"></i></p>
            <div className="shippingDetails">
                {cardDetails && cardDetails.length > 0 ? (
                    cardDetails.map((cardDetail) => (
                        <div className="detail" key={cardDetail.name}>
                        <div className="top">
                            <h4>{cardDetail.name}</h4>
                            <h4>{cardDetail.contact}</h4>
                            <h4>{cardDetail.email}</h4>
                        </div>
                        <div className="address">
                            {cardDetail.address}
                        </div>
                        </div>
                    ))
                    ) : (
                    <>
                        <div className="detail">
                            <h4>Shipping Details Not Available.</h4>
                        </div>
                    </>
                    )}
           </div>
  </div>
  )
}

export default ShippingDetails
