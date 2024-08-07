import React, { useEffect, useState } from 'react'
import './NewCollections.css'
// import newCollection from '../Assets/new_collections';
import Item from '../items/Item';

const NewCollections = () => {
  
  const [newcollections, SetNewcollections] = useState([])
  useEffect(()=>{
    fetch('https://fashionfrenzybackend.onrender.com/newcollections')
    .then((res)=>res.json())
    .then((data)=>SetNewcollections(data))
  },[])

  return (
    <div className='new-collections' id='latestcollections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {newcollections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections