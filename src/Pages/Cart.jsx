import React from 'react'
import './CSS/Cart.css'
import cart_logo from '../Components/Assets/logo_big.png'
import shopping_img from '../Components/Assets/shopping.jpg'

export const Cart = () => {
  return (
    <div className='cart'>
        <div className="cart-heading">
            <img src={shopping_img} alt="" />
            <h2>Keep shopping for more amazing deals!</h2>
        </div>
        <div className="cart-logo">
            <img src={cart_logo} alt="" />
            <p>FASHIONNEST</p>
        </div>
   </div>  
  )
}
