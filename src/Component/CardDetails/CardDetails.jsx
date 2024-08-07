import React, { useState } from 'react'
import './CardDetails.css'
import Popup from 'reactjs-popup'
import { motion, AnimatePresence } from 'framer-motion'
import { toast, Toaster } from 'sonner'

const CardDetails = () => {

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [card,SetCard] = useState({
    name:'',
    cardNumber:'',
    cvv:'',
    email:'',
    month:'',
    contact:'',
    address:''
  })
  

  const changeHandler = (e)=>{
    SetCard({...card,[e.target.name]:e.target.value})
  }

  // console.log(card);
  let responseData;
  const saveCardDetails = async()=>{
    await fetch('https://fashionfrenzybackend.onrender.com/card',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'auth-token': `${localStorage.getItem('auth-token')}`,
        'Content-Type':'application/json'
      },
      body: JSON.stringify(card)
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(responseData = data);
      console.log(responseData.success + responseData.message);
    })
    if(!card.name || !card.cardNumber || !card.contact || !card.cvv || !card.email || !card.month){
      toast.error("Kindly provide all Necessary Information.")
    }else if(card.cardNumber.length != 11 ){
      toast.error("Enter Valid Card Number")
    }else if(card.cvv.length != 3 ){
      toast.error("Enter Valid CVV Number")
    }else{
      if(responseData.success == true){
        setOpen(o => !o)
        toast.success(responseData.message)
        console.log(card.name);
        console.log(responseData.cardDets);
      }else{
        setOpen(o => !o)
        toast.error(responseData.message)
        console.log(card.name);
      }
    }
  }

  
  const [cardDetails,SetCardDetails] = useState([])

  const getCardDetails = async ()=>{
    <Toaster position='bottom-right' closeButton  />
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

  const deleteCardDetails = async()=>{
    await fetch('https://fashionfrenzybackend.onrender.com/deletecarddetails',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
            'auth-token': `${localStorage.getItem('auth-token')}`,
        }
    })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data);
            if(data.success == true){
              toast.success(data.message)
            }else{
              toast.error(data.message)
            }
        })
}



  return (
    <div className='carddetails'>
      <h3>Payment Methods</h3>
      <p onClick={getCardDetails} className='refresh' >Refresh Card Details <i class="fa-solid fa-arrows-rotate"></i></p>
      <div className="cardDetailsContainer">
                {cardDetails && cardDetails.length > 0 ? (
                              cardDetails.map((cardDetail) => (
                                <div className="card">
                                <div className="content">
                                  <p> {cardDetail.cardNumber} </p>
                                  <label htmlFor="card"> {cardDetail.name}  </label>
                                  <i class="fa-regular fa-credit-card"></i>
                                </div>
                                  <i onClick={deleteCardDetails} class="fa-solid fa-trash delete" title='Delete'></i>
                                </div>
                              ))
                              ) : (
                              <></>
                    )}
       
          <div className="add">
          {cardDetails && cardDetails.length > 0 ? (
            <label htmlFor="addcard" onClick={() => setOpen(o => !o)}> <i class="fa-regular fa-credit-card"></i>Replace With New Card</label>
          ): (
            <label htmlFor="addcard" onClick={() => setOpen(o => !o)}> <i class="fa-regular fa-credit-card"></i>Add a New Card</label>
          )}
          </div>
      </div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
             <AnimatePresence>
             <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                exit={{y:100,opacity:0}}
                transition={{ease:'easeInOut',duration:0.5}}
                className="info">
                    <a className="close" onClick={closeModal}>
                        &times;
                    </a>
                   <h3>Provide Information</h3>
                   <form action="">
                       <div className="top">
                          <div className="cont">
                            <label htmlFor="name">Name</label>
                              <label htmlFor="">Card Number</label>
                              <label htmlFor="">CVV</label>
                            </div>
                            <div className="cont">
                              <input type="text" name='name' value={card.name.trim()} onChange={changeHandler} id='name' placeholder='Full Name' />
                              <input type="text" name='cardNumber' value={card.cardNumber.trim()} onChange={changeHandler} placeholder='Card Number' />
                              <input type="text" name='cvv' value={card.cvv.trim()} onChange={changeHandler} placeholder='CVV' />
                            </div>
                            <div className="dates">
                              <input type="month" name='month' value={card.month.trim()} onChange={changeHandler} placeholder='MM' />
                          </div>
                       </div>
                       <div className="email">
                        <div className="cont">
                            <label htmlFor="">Email</label>
                            <label htmlFor="contactinfo">Contact Information</label>
                          </div>
                          <div className="cont">
                            <input type="email" name='email' value={card.email.trim()} onChange={changeHandler} placeholder='Email' />
                            <input name='contact' value={card.contact.trim()} onChange={changeHandler} type="text" id='contactinfo' placeholder='Contact Information' />
                          </div>
                       </div>
                       <div className="address">
                        <div className="cont">
                            <label htmlFor="address">Address</label>
                        </div>
                          <div className="cont">
                            <textarea name='address' type="text" value={card.address} onChange={changeHandler} rows={0} cols={50} id='address' placeholder='Address' />
                          </div>
                       </div>
                   </form>
                   <div className="btn-container">
                      <button onClick={saveCardDetails}>Save Details</button>
                   </div>
                </motion.div>
             </AnimatePresence>
      </Popup>
    </div>
  )
}

export default CardDetails
