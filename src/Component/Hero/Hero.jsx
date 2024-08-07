import React from 'react'
import './Hero.css'
import handIcon from '../../../Assets/hand_icon.png'
import heroImage from '../../../Assets/hero_image.png';
import { color, motion } from 'framer-motion';

const Hero = () => {

  return (
    <div className='hero'>
      <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="hero-left">
       <div className="h2-container"> <h2>New Arrivals Only</h2></div>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={handIcon} alt="" />
            </div>
            <p>Collections</p>
            <p>For Every One</p>
        </div>
        <div className="hero-latest-btn">
            <div><a href="#latestcollections">Latest Collection <i class="fa-solid fa-arrow-right"></i></a></div>
            
        </div>
      </motion.section>
      <section className="hero-right">
        <motion.img
        initial={{y:300,opacity:0,scale:0.9}}
        whileInView={{y:0,opacity:1,scale:1.05}}
        transition={{duration:0.2}}
        viewport={{once:true}}
        src={heroImage} alt="" />  
      </section>
    </div>
  )
}

export default Hero
