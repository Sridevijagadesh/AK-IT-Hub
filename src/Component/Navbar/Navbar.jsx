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
        <li onClick={window.scrollTo(0,0)} ><NavLink to='/' className='link ' onClick={navToggle} >Home</NavLink></li>
        <li><NavLink to='/about'  className='link' onClick={navToggle}>About</NavLink></li>
        <li><NavLink to='/service'  className='link' onClick={navToggle}>service</NavLink></li>
        <li><NavLink to='/team'  className='link' onClick={navToggle}>Team</NavLink></li>
        <li><NavLink to='/contact' className='link' onClick={navToggle}>contact</NavLink></li>
        <li><NavLink to ='/login' className='link' onClick={navToggle}>Login</NavLink></li>
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
