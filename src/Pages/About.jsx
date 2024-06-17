import React from 'react'
import { FaArrowRight} from 'react-icons/fa6'

const About = () => {
  return (
    <div>
        <div className='about'>
         <div className='about-container'>
          <h1>ABOUT US</h1>
          </div>
          <div className='about-web'>
            <div className='about-web1'>
             <h1>Welcome to our website</h1>
            <p>Welcome to AK IT Pvt Ltd, where innovation meets excellence.</p>
            <p>With a proven track record of success and a relentless pursuit of innovation, we are committed to empowering businesses to thrive in today's fast-paced digital landscape.</p>
           </div>
        
            <div className='about-web'>
              <img src='https://i.pinimg.com/originals/af/7b/7a/af7b7a8ee3766dcf960c3c2f9d6010ac.jpg' alt=''/>
            </div>
            
            </div>
            <div className='about-info'>
            <h1>What We bring to the table</h1>
           <p>We've had an amazing journey coming to where we are today and now feel confident that we can provide you a professional and effecive solution that in a a timely manner. We have extensive Skills in the Following aread:</p>
           <p><FaArrowRight/>Creating clean , accessiable HTML</p> 
           <p><FaArrowRight/>Writing CSS to make your site look beautiful</p> 
           <p><FaArrowRight/>Writing funcional , usefull code to power website</p> 
           <p><FaArrowRight/>Creating useful innovation web application from the groung up using these skills</p> 
           <p><FaArrowRight/>Giving you as a client , the best poosiable experience in working with us</p>
           </div>
        </div>
    </div>
  )
}

export default About
