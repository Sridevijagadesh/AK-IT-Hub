import { useState } from "react"
import  Axios   from "axios"
import React from 'react'
import '../CSS/ServicePage.css'


const ServicePage = () => {
  const [newUser , setNewAuthor] = useState({
    photo: '',
    course: '',
    description: ''
  })

  const handleChange=(e)=>{
    setNewAuthor({...newUser , [e.target.name]: e.target.value})
  }
  const handlephoto = (e)=>{
    setNewAuthor({...newUser , photo: e.target.files[0]})
  }
const handleSumbit = (e)=>{
e.preventDefault();
const formData = new FormData();
formData.append('photo' , newUser.photo);
formData.append('course' , newUser.course);
formData.append('description' , newUser.description);
Axios.post('http://localhost:8081/user/service', formData).then(res=>{
  console.log(res.data)
})
.catch(err=>{
  console.log(err)
})
}

  return (
    <div>
       <div className='admin-service' style={{marginTop:'50px'}}>
    <form   className="serviceform" encType='multipart/form-data'>
    <div className="form-group">
      <label htmlFor='image' className=''>Image</label>
      <input type='file' accept='.png , .jpg, .jpeg'name='photo' onChange={handlephoto}></input>
      </div>
      <div className="form-group">
      <label htmlFor='course' className=''>course</label>
     
  
      <input type='text' name='course' onChange={handleChange} ></input>
      </div>
      <label htmlFor='description' className=''>Description</label>
      <div className="form-group">
      <textarea type='text' name='description' onChange={handleChange} />
      </div>
      <button className ='btn-form'onClick={handleSumbit}>sumbit</button>
 
    </form>
   </div>
    </div>
  )
}

export default ServicePage
