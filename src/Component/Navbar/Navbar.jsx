import React, {  } from 'react'
import {NavLink} from 'react-router-dom'
import '../Navbar/Navbar.css'

const Navbar = () => {
  // const [nav , setNav] =useState('')
 
  return (
    <div className='navbar'>
      <div className="nav-log">
        <p>AT-IT-HUB</p>
      </div>
      <ul className='nav-menu'>
        <li ><NavLink to='/' className='link ' >Home</NavLink></li>
        <li><NavLink to='/about'  className='link'>About</NavLink></li>
        <li><NavLink to='/service'  className='link'>service</NavLink></li>
        <li><NavLink to='/contact' className='link'>contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
