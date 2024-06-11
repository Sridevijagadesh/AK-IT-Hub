import React from 'react'
import { FaLinkedin , FaInstagram , FaWhatsapp ,FaCopyright , FaTwitter, FaSnapchat} from "react-icons/fa6";
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <h1>AT-IT-HUB</h1>
      <div className='footer-plane'>
      <FaLinkedin/>
    <FaInstagram/>
    <FaWhatsapp/>
    <FaTwitter/>
    <FaSnapchat/>
    </div>
    <p>AT-IT-HUB <FaCopyright/> -2024</p>
    </div>
  )
}

export default Footer
