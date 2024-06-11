import React from 'react'
import '../Pages/CSS/home.css'
import home_img from '../Component/assest/Home.png.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='home-box'>
     <h1>Welcome To AK IT PVT LTD</h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque illo distinctio dolor optio omnis. Qui aspernatur, vel voluptates vitae dignissimos fuga distinctio quibusdam nulla magnam, nesciunt in, odio a tenetur!</p>
      <button className='button'>Explore project</button>
   
      </div>
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
           <Link to='/about'> <button className='button1'>Read MORE</button></Link>
           </div>
            <div className='about-web'>
              <img src='https://i.pinimg.com/originals/af/7b/7a/af7b7a8ee3766dcf960c3c2f9d6010ac.jpg' alt=''/>
            </div>
            </div>
        </div>
        {/* service page */}
        <div className='service'>
          <div className='service-header'>
            <h1>Service provided</h1>
            </div>
            <div className='service-box'>
              <div className='service-box1'>
              <img src='https://bizforcetech.com/wp-content/uploads/2022/05/choosing_managed_it_services_provider.png' alt=''/>
              <h5>AI ARTIFICAL INTELEGENT</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magni dignissimos mollitia optio quibusdam repudiandae odit consequuntur labore.</p>
              </div>
              <div className='service-box1'>
              <img src='https://codup.co/wp-content/uploads/2021/08/full-stack-development.png' alt=''/>
              <h5>FULL STACK DEVELOPER</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magni dignissimos mollitia optio quibusdam repudiandae odit consequuntur labore.</p>
              </div>
              <div className='service-box1'>
              <img src='https://www.allbusiness.com/media-library/machine-learning.jpg?id=32093222&' alt=''/>
              <h5>MACHINE LEARNING</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magni dignissimos mollitia optio quibusdam repudiandae odit consequuntur labore.</p>
              </div>
              <div className='service-box1'>
              <img src='https://www.agroinfomart.com/images/og-subcategory1/service-provider.jpg' alt=''/>
              <h5>WEBSITE DEVELOPER</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magni dignissimos mollitia optio quibusdam repudiandae odit consequuntur labore.</p>
              </div>
              
          </div>
         </div>
         {/* contact as */}
         <div className='contact'>
          <h1>Contact As</h1>
           <div className='contact-box'>
           <img src='https://designtlc.com/wp-content/uploads/2020/05/contact-us-blog.jpg' alt=''/>
           <div className='form-container'>
         <form  className='form'>
         <div className='form-group'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input type='name' placeholder='enter your name' name='name'/>
         </div>
         <div className='form-group'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input type='email' placeholder='enter your email' name='email'/>
         </div>
         <div className='form-group'>
          <label htmlFor='contact' className='form-label'>Moblie number</label>
          <input type='number' placeholder='enter your number' name='contact'/>
         </div>
         <div className='form-group'>
          <label htmlFor='message' className='form-label'>message</label>
          <textarea>
          <input type='textarea' placeholder='enter your message' name='message'/>
          </textarea>
         </div>
         <button className='btn-form'>Submit</button>
         </form>
           </div>
           </div>
         </div>
    </>
  )
}

export default Home
