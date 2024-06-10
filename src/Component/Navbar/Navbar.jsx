import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-log">
        <p>AT-IT-HUB</p>
      </div>
      <ul className='nav-menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>service</Link></li>
        <li><Link to='/contact'>contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
