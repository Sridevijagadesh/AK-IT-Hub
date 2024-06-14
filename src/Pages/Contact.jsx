import React, { useState } from 'react'
import Axios from 'axios'

const Contact = () => {
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
    <div>
       <div className='contact'>
          <h1>Contact As</h1>
           <div className='contact-box'>
           <img src='https://designtlc.com/wp-content/uploads/2020/05/contact-us-blog.jpg' alt=''/>
           <div className='form-container'>
         <form  className='form' >
         <div className='form-group'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input type='name' placeholder='enter your name' name='name' onChange={(e)=>{setname(e.target.value)}}/>
         </div>
         <div className='form-group'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input type='email' placeholder='enter your email' name='email'onChange={(e)=>{setemail(e.target.value)}}/>
         </div>
         <div className='form-group'>
          <label htmlFor='contact' className='form-label'>Moblie number</label>
          <input type='number' placeholder='enter your number' name='contact' onChange={(e)=>{setnumber(e.target.value)}}/>
         </div>
         <div className='form-group'>
          <label htmlFor='message' className='form-label'>message</label>
     
          <input type='textarea' placeholder='enter your message' name='message'onChange={(e)=>{setmessage(e.target.value)}}/>
        
         </div>
         <button className='btn-form' onClick={myData}>sumbit</button>
         </form>
           </div>
           </div>
         </div>
    </div>
  )
}

export default Contact
