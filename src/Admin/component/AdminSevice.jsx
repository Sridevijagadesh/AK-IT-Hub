import Axios  from 'axios'
import React, { useEffect, useState } from 'react'

const AdminSevice = () => {

    const [newUser , setNewAuthor] = useState({
      photo: '',
      course: '',
      description: ''
    })
    const [service , serviceData] = useState([])
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
// fetching data
useEffect(()=>{
  Axios.get('http://localhost:8081/user/rec').then((res)=>{
    serviceData(res.data)
  }).catch((err)=>{
    console.log(err)
  })
},[])
// update the data
const updateData =(id)=>{
  Axios.put('http://localhost:8081/user/serviceUpdate',newUser)
}
//delete the data
const deletedata = (id)=>{
  Axios.delete(`http://localhost:8081/user/serviceDelete/${id}`)
}
  return (
   <>
   <div className='admin-service'>
    <form   encType='multipart/form-data'>
      <label htmlFor='image' className=''>Image</label>
      <input type='file' accept='.png , .jpg, .jpeg'name='photo' onChange={handlephoto}></input>
      <label htmlFor='course' className=''>course</label>
      <input type='text' name='course' onChange={handleChange} ></input>
      <label htmlFor='description' className=''>Description</label>
      <input type='text' name='description' onChange={handleChange} ></input>
      <button onClick={handleSumbit}>sumbit</button>
    </form>
   </div>

   <div className='deatching '>
    <table>
      <tr>
        <th>image</th>
        <th>course</th>
        <th>description</th>
        <th>Delete</th>
        <th>update</th>
      </tr>
      {service.map((val ,index)=>{
        return <>
        <tr>
          <td><img src={`http://localhost:8081/Images/${val.photo}`} width='100px' alt=''/></td>
          <td>{val.course}</td>
          <td>{val.description}</td>
          <th><button onClick={()=>{deletedata(val._id)}}>Delete</button></th>
          <th><button onClick={()=>updateData(val._id)}>update</button></th>
        </tr>
        </>
      })}
    </table>
   </div>
   </>
  )
}

export default AdminSevice
