import React ,{useState} from 'react'
import '../Pages/CSS/home.css'
import home_img from '../Component/assest/Home.png.png'
import android_img from '../Component/assest/Android-PNG.png'
import {Link} from 'react-router-dom'
import Axios from 'axios'

const Home = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [number, setnumber] = useState('')
  const [message, setmessage] = useState('')

  const myData = ()=>{
Axios.post('http://localhost:8081/insert',{
  name:name, 
  email:email,
  number:number,
  message:message
})
  }
  return (
    <>
 <section  className='home-view'>
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
    </section>
   
    <div className='about'>
         <div className='about-container'>
          <h1>ABOUT US</h1>
          </div>
          <div className='about-web'>
            <div className='about-web1'>
            
            <h1>Welcome to our website</h1>
            <p>Welcome to AK IT Pvt Ltd, where innovation meets excellence.</p>
            <p>With a proven track record of success and a relentless pursuit of innovation, we are committed to empowering businesses to thrive in today's fast-paced digital landscape.</p>
           <Link to='/about'> <button className='button1'>Read MORE</button></Link>
           </div>
            <div className='about-web2'>
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
                <div className='service-box-img'>
                  <img src='https://www.ux-ui.net/ux/uploads/2015/05/ux-iu-logo1.png' alt='' />
              </div>
              <h5>UI/UX DESING</h5>
             <p>Our designers re-imagine and redefine user experiences across platforms and digital ecosystems   giving you a superior look & usability</p>
              </div>
              <div className='service-box1'>
              <div className='service-box-img'>
                <img src='https://cdni.iconscout.com/illustration/premium/thumb/full-stack-javascript-developer-4517286-3757254.png' alt=''/>
             </div>
              <h5>FULL STACK DEVELOPER</h5>
              <p>  Our experts understand  your unique business needs and work on the  latest technologies to achieve business goals through corporate websites and microsites.</p>

              </div>
              <div className='service-box1'>
              <div className='service-box-img'>
              <img src={android_img} alt=''/>
              </div>
              <h5>App Development</h5>
              <p>Our mobile app development team creates beautiful apps that    will enrich the future of your digital business</p>
              </div>
              <div className='service-box1'>
              <div className='service-box-img'>
              <img src='https://pluspng.com/img-png/web-development-png-web-development-500.png' alt=''/>
             </div>
              <h5>WEBSITE DEVELOPER</h5>
              <p>  Our experts understand  your unique business needs and work on the  latest technologies to achieve business goals through corporate websites and microsites.</p>
              </div>
              
          </div>
         </div>

         {/* OUR team */}
         <div className='team-container'>
          <h1>Our Leadership team</h1>
          <p>with over 10 years of experiene , we've got a well-seasoned team at the help</p>
          <div className='team-box'>
            <div className="team-box1">
            <img src='https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png' alt=''></img>
            <h4>Mr. Amith kapure</h4>
            <p>CO-FOUNDER</p>
            </div>
            <div className="team-box1">
            <img src='https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png' alt=''></img>
            <h4>Mr. Amith kapure</h4>
            <p>Frontend Developer</p>
            </div>
            <div className="team-box1">
            <img src='https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png' alt=''></img>
            <h4>Mr. Amith kapure</h4>
            <p>Backend Developer(PHP)</p>
            </div>
            <div className="team-box1">
            <img src='https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png' alt=''></img>
            <h4>Mr. Amith kapure</h4>
            <p>Backend Developer(Node Js)</p>
            </div>

          </div>
         
         </div>
         {/* contact as */}
         <div className='contact'>
          <h1>Contact As</h1>
           <div className='contact-box'>

           <div className='form-container'>
         <form  className='form'>
         <div className='form-group'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input type='name' placeholder='enter your name' name='name' onChange={(e)=>{setname(e.target.value)}}/>
         </div>
         <div className='form-group'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input type='email' placeholder='enter your email' name='email'  onChange={(e)=>{setemail(e.target.value)}}/>
         </div>
         <div className='form-group'>
          <label htmlFor='contact' className='form-label'>Moblie number</label>
          <input type='number' placeholder='enter your number' name='contact' onChange={(e)=>{setnumber(e.target.value)}}/>
         </div>
         <div className='form-group'>
          <label htmlFor='message' className='form-label'>message</label>
    
          <textarea  placeholder='enter your message' name='message' className='contact-textarea ' onChange={(e)=>{setmessage(e.target.value)}}/>
    
         </div>
         <button className='btn-form' onClick={myData}>Submit</button>
         </form>
           </div>
           </div>
         </div>
     
    </>
  )
}

export default Home
