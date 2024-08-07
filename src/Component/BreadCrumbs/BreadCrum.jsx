import React from 'react'
import './Breadcrum.css'
// import arrowIcon from '../Assets/breadcrum_arrow.png'
import arrowIcon from '../../../Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom'

const BreadCrum = (props) => {
  const {product} = props;
  const linkStyle = {
    textDecoration:'none',
    color:'var(--popular-color)'
  }
  // console.log(props)
  return (
    <div className="container">
      <div className='breadcrum'>
        <Link to='/' style={linkStyle}>HOME</Link> <img src={arrowIcon} alt="" />
        SHOP<img src={arrowIcon} alt="" />
        {product.category} <img src={arrowIcon} alt="" />
        {product.name}
      </div>
    </div>
  )
}

export default BreadCrum
