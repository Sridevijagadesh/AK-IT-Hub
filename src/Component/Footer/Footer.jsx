import React from 'react'
import { FaLinkedin , FaInstagram , FaWhatsapp ,FaCopyright , FaTwitter, FaSnapchat, FaAngleRight ,FaPhone,FaEnvelope, FaLocationPin } from "react-icons/fa6";
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <h1>AT-IT-HUB</h1>
      <div className='footer-plane'>
      <div className='box'>
        <h2>Quick Link</h2>
       <p><FaAngleRight color='#fa690f'/>Home</p>
        <p><FaAngleRight color='#fa690f'/>About</p>  
      <p><FaAngleRight color='#fa690f'/>Service</p>
        <p><FaAngleRight color='#fa690f'/>Contact</p>
      </div>
      <div className='box'>
        <h2>Contact As</h2>
       <p> <FaPhone color='#fa690f'/>+919-999-999-999</p>
       <p> <FaEnvelope  color='#fa690f'/>AK@gmail.com</p>
       <p> <FaLocationPin color='#fa690f'/>Maharashtra 414001</p>
      </div>
      
   <div className='box'>
    <h2>Social Media</h2>
    <p><FaLinkedin color='#fa690f' fontSize='25px'/> linkedIn</p>
    <p><FaInstagram color='#fa690f' fontSize='25px'/> Instagram</p>
    <p><FaWhatsapp color='#fa690f' fontSize='25px'/> Whatsapp</p>
    <p><FaTwitter color='#fa690f' fontSize='25px'/> Twittweer</p>
  
    </div>
    </div>
    <p>AK-IT-HUB <FaCopyright/> -2024</p>
    </div>
  )
}

export default Footer
