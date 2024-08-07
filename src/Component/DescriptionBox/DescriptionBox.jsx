import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>An E-commerce Website is an online platform tht facilitates buying and selling of product or services over the internet. It serves as a virtual marketplace where businesses and individuals showcase their product, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenient accessiblity and the global reach they offer. </p>
            <p>E-commerce websites typically display product or services as detailed descriptions, images, prices, and any available variations(e.g sizes and colours).
            Each product usually has it's own description with relevant information.    
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
