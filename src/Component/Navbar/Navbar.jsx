import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import '../Navbar/Navbar.css'

const Navbar = () => {
  const [active , setActive] =useState('nav-menu')
  const [toogleIcon , setToogleIcon] = useState('toogle')
  const navToggle = ()=>{
    active === 'nav-menu'?setActive('nav-menu nav__active'):
    setActive('nav-menu')

    // toggler icon
    toogleIcon==='toogle'?setToogleIcon('toogle nav__toggle' ):
    setToogleIcon('toogle')
  }

  return (
    <>
    <div className='navbar'>
      <div className="nav-log">
        <p>AK-IT-HUB</p> 
      </div>
      <ul className={active}>
        <li ><NavLink to='/' className='link ' >Home</NavLink></li>
        <li><NavLink to='/about'  className='link'>About</NavLink></li>
        <li><NavLink to='/service'  className='link'>service</NavLink></li>
        <li><NavLink to='/contact' className='link'>contact</NavLink></li>
      </ul>
<div  className={toogleIcon} onClick={navToggle}>
  <div className="line1"></div>
  <div className="line2"></div>
  <div className="line3"></div>
</div>
   
        </div>
 

    </>
  )
}

export default Navbar
