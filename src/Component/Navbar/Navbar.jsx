import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../../Assets/logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { motion,easeInOut, AnimatePresence } from 'framer-motion'
import { Toaster, toast } from 'sonner'
import sunIcon from '../../../Assets/sun.png'
import moonIcon from '../../../Assets/crescent-moon.png'

const Navbar = (props) => {
  
  const [menu,setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  const dropdownMenu = useRef(null)
  const twisticon = useRef(null)
  const logoname = useRef(null)
  const [username,setUsername] = useState("")

  const moon2 = useRef(null)
  const moon = useRef(null)

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  if (moon.current && moon2.current) {
    if (mediaQuery.matches) {
      props.body.current.classList.add('dark-theme');
      moon.current.src = sunIcon;
      moon2.current.src = sunIcon;
      localStorage.setItem('theme', 'dark');
    } else {
      props.body.current.classList.remove('dark-theme');
      moon.current.src = moonIcon;
      moon2.current.src = moonIcon;
      localStorage.setItem('theme', 'light');
    }
  }

  function changeTheme(){
    props.body.current.classList.toggle('dark-theme')
    let theme = props.body.current.classList;
  
    let statement = "Dark Mode Enabled"
    if(theme == "dark-theme" ){
      statement = "Dark Mode Enabled"
      moon.current.src = sunIcon
      moon2.current.src = sunIcon
      localStorage.setItem('theme', 'dark');
      
    }else{
      statement = "Light Mode Enabled"
      moon.current.src = moonIcon
      moon2.current.src = moonIcon
      localStorage.setItem('theme', 'light');
    }

    toast.message(
      <div> {statement} </div>
    )
  
  }
  const prvent = (e)=>{
    e.current.preventDefault()
  }

  const dropdownToggle = ()=>{
    dropdownMenu.current.classList.toggle('nav-menu-visible')     
    dropdownMenu.current.style.transition = 2;
    twisticon.current.classList.toggle('icontoggle')
  }

    const reverseToggle = () => {
      dropdownMenu.current.classList.toggle('nav-menu-visible')     
      dropdownMenu.current.style.transition = 2;  
      twisticon.current.classList.toggle('icontoggle')
    }

    useEffect(() => {
      reverseToggle();
    }, [menu]); 
  
 
  const linkStyle = {
    textDecoration : "none",
    color: "var(--text)"
  }
  const spanStyle={
    color: '#ff4141',
    fontWeight: '700',
  }

    if(localStorage.getItem('auth-token')){
      fetch('https://fashionfrenzybackend.onrender.com/getusername',{
        method:'GET',
        headers:{
          Accept: 'text/html',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'text/html'
        }
      })
      .then((res)=>res.text())
      .then((data)=>{setUsername(data)})
    }
  
  return (
    <nav className='navbar'>
      <Toaster position='bottom-right' closeButton richColors  />
      <div className="nav-logo">
        <Link to='/' style={{display:'flex',alignItems:'center'}} >
          <img src={logo} alt="" />
        </Link>
          <p><a ref={logoname} onClick={prvent} style={linkStyle} href="/">FashionFrenzy</a></p>
      </div>
      <div className="menu-cart">
        <motion.i ref={twisticon}  onClick={dropdownToggle}  class="fa-solid fa-caret-right menuicon"></motion.i>
        <AnimatePresence>
        <motion.ul ref={dropdownMenu} className="nav-menu"
          initial={{x:200,opacity:0}}
          whileInView={{x:0,opacity:1}}
          exit={{x:200,opacity:0}}
          transition={{duration:0.3}}
        >
            <li onClick={()=>{setMenu("shop")}}><Link style={linkStyle} to='/'>Shop </Link> {menu === "shop" ? <hr />:<></>}  </li>
            <li onClick={()=>{setMenu("mens")}}> <Link style={linkStyle} to='/mens'>Men </Link> {menu === "mens" ? <hr />:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}> <Link style={linkStyle} to='/womens'>Women </Link>{menu === "womens" ? <hr />:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={linkStyle} to='/kids'>Kids</Link> {menu === "kids" ? <hr />:<></>}</li>

          <div className='extras'>
            <Link style={linkStyle} onClick={()=>{reverseToggle()}} to='/cart'><i class="fa-solid fa-cart-shopping"><div className="nav-card-count">{getTotalCartItems()}</div></i></Link>
            
            <img ref={moon2} className='theme-btn' onClick={changeTheme} src={moonIcon}  alt="" />
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link style={linkStyle} onClick={()=>{reverseToggle()}} to='/login'><button>Login</button></Link>}
          </div>
          
        </motion.ul>
        </AnimatePresence>
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')?<motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:0.8}} viewport={{once:true}}>HI, <span style={spanStyle}>{username}</span></motion.p>:<></>}
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login'><button>Login</button></Link>}
          <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
          <div className="nav-card-count">{getTotalCartItems()}</div>
          <img ref={moon} className='theme-btn' onClick={changeTheme} src={moonIcon}  alt="" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
