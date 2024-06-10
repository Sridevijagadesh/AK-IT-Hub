import React from 'react'
import {Link} from 'react-router-dom'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-log">
        <p>AT-IT-HUB</p>
      </div>
      <ul className='nav-menu'>
        <li><Link to='/' className='link active'>Home</Link></li>
        <li><Link to='/about'  className='link'>About</Link></li>
        <li><Link to='/service'  className='link'>service</Link></li>
        <li><Link to='/contact' className='link'>contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
