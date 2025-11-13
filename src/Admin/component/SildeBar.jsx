import React from 'react'
import {  NavLink,  } from 'react-router-dom'
import '../CSS/Silder.css'

const SildeBar = () => {
  return (
    <div className='silde-bar'>
      <h1>silder</h1>
      <NavLink className='nav-link' to = 'adminservice'>services</NavLink>
      <NavLink className='nav-link'to='team'>Team</NavLink>
      <NavLink className='nav-link' to='customer'>customer</NavLink>
      {/* <NavLink className= 'nav-link' to = 'servicePage'>add page</NavLink> */}
    </div>
  
  )
}

export default SildeBar
