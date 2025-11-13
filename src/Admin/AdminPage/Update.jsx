import { useEffect, useState } from "react"
import  Axios   from "axios"
import React from 'react'
import '../CSS/ServicePage.css'
import { useNavigate, useParams } from "react-router-dom"


const Update = () => {
  const navigation = useNavigate()
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
  //featching the data by it ID
  const {id} = useParams()
  useEffect(()=>{
Axios.get(`http://localhost:8081/user/serviceupdate/${id}`)
.then(res=>{
  setNewAuthor(res.data.description)
  setNewAuthor(res.data.course)
  setNewAuthor(res.data.photo)
})
.catch(err=> console.log(err))
  })


const updateForm = (e)=>{
e.preventDefault();
const { course, description, photo, } = e.target;
    const arrayOfYourFiles = Array.from(photo.files);

const formData = new FormData();
// formData.append('photo' , photo.value);
formData.append('course' , course.value);
formData.append('description' , description.value);
arrayOfYourFiles.forEach((file) => {
  formData.append("photo", file);
});

Axios.put(`http://localhost:8081/user/serviceupdate/${id}` ,
 formData

).then(res=>{
  alert("Item is  updated");

 navigation('/dashboard/adminservice')
  
  console.log(res)
})
.catch(err=>{
  console.log(err)
})
}

  return (
    <div>
       <div className='admin-service' style={{marginTop:'50px'}}>
    <form   className="serviceform" onSubmit={updateForm} encType='multipart/form-data'>
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
      <button className ='btn-form'>Update</button>
 
    </form>
   </div>
    </div>
  )
}

export default Update
