import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

const AdminSevice = () => {
  const [service , serviceData] = useState([])
  const [newUser , setNewAuthor] = useState({
    photo: '',
    course: '',
    description: ''
  })

// fetching data
useEffect(()=>{
  Axios.get('http://localhost:8081/user/rec').then((res)=>{
    serviceData(res.data)
  }).catch((err)=>{
    console.log(err)
  })
},[])
//update the data
const updateData =(id)=>{
  Axios.put('http://localhost:8081/user/serviceUpdate',newUser)
}
//delete the data
const deletedata = (id)=>{
  Axios.delete(`http://localhost:8081/user/serviceDelete/${id}`)
}
  return (
   <>
  

   <div className='featching '>
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
        <th> <NavLink to='serviceupadate'> <button onClick={()=>updateData}>update</button></NavLink></th>
        </tr>
        </>
      })}
    </table>
   <NavLink to ='servicePage'> <button style={{background:'red', textAlign:'center', width:'300px', marginTop:'50px', padding:'10px', color:'white', fontSize:'20px'}}>Add the service page</button></NavLink>
   </div>
   </>
  )
}

export default AdminSevice
