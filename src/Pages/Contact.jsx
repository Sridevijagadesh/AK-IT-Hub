import React from 'react'

const Contact = () => {
  return (
    <div>
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
         <button className='btn-form'>sumbit</button>
         </form>
           </div>
           </div>
         </div>
    </div>
  )
}

export default Contact
