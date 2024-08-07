import React, { useRef } from 'react'
import './Footer.css'
import footerLogo from '../../../Assets/logo_big.png'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer-content">
     <div className="footer-logo">
        <div>
          <img src={footerLogo} alt="" />
          <p>FashionFrenzy</p>
        </div>
        <h4>Shopping Fantasy at your service</h4>
      </div>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="#">About</a>
        <a href="/#">Contact Us</a>
        <a href="/#">Terms and Conditions</a>
      </div>
     </div>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <a href="https://www.instagram.com/elocodex/"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div className="footer-icons-container">
            <a href="https://wa.link/oz4vup"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
      
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Rights Reserved - Built by Elo</p>
      </div>
    </div>
  )
}

export default Footer
