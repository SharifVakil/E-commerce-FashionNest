import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import nav_dropdown from '../Assets/dropdownIcon.png'

export const Navbar = () => {
    const[menu, setMenu] = useState("shop")
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>FashionNest</p>
        </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'black'}} to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none', color:'black'}} to='/mens'>Product</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none', color:'black'}} to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration:'none', color:'black'}} to='/contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-cart">
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
    </div>
  )
}
