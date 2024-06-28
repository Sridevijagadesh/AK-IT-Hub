 import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../CSS/customer.css'
import { FaX } from 'react-icons/fa6'

const Customer = () => {
 const [customerData , setData] = useState([])

 useEffect(()=>{
Axios.get('http://localhost:8081/read').then((res)=>{
  setData(res.data)
})
 },[])

 //deleting the contact detail
 const deleteData = (id)=>{
  Axios.delete(`http://localhost:8081/delete/${id}`)
 }

  return (
    <>
    <div className='admin-contact-detail'>
    <table width={100} align='center'>
     

          <tr>
       <th><p>Name</p></th>
       <th><p>Email</p></th>
       <th><p>Number</p></th>
       <th><p>Message</p></th>
       <th><p>Delete</p></th>
        </tr>
     
      {customerData.map((val , key)=>{
        return<>
        <tr>
  
          <td><p>{val.name}</p></td>
          <td><p>{val.email}</p></td>
          <td><p>{val.number}</p></td>
          <td><p>{val.message}</p></td>
          <td><button ><FaX color='red' fontSize='25px'onClick={()=>deleteData(val._id)}/></button></td>
        </tr>
        </>
      })}
      </table>
 
    </div>

    </>
  )
}

export default Customer

