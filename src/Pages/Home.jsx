import React from 'react'
import '../Pages/CSS/home.css'
import home_img from '../Component/assest/Home.png.png'

const Home = () => {
  return (
    <>
    <div className='home'>
     <h1>Welcome To AK IT PVT LTD</h1>
      <button className='button'>Explore project</button>
      <div className='home-img'>
        <img src={home_img}  alt=''/>
  </div>
    </div>
   
    <div className='about'>
         <div className='about-container'>
          <h1>ABOUT US</h1>
          </div>
          <div className='about-web'>
            <div className='about-web1'>
            
            <h1>Welcome to our website</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam suscipit quidem quos temporibus illo hic. Magni, sunt deserunt! Expedita iure recusandae, eveniet magni voluptates aliquam fugit odit autem repellat. Vitae!</p>
           </div>
            <div className='about-web'>
              <img src='https://i.pinimg.com/originals/af/7b/7a/af7b7a8ee3766dcf960c3c2f9d6010ac.jpg' alt=''/>
            </div>
            </div>
      
          
    </div>
    </>
  )
}

export default Home
