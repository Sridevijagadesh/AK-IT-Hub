import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Customer = () => {
 const [customerData , setData] = useState('')

 useEffect(()=>{
Axios.get('http://localhost:8081/read').then((res)=>{
  setData(res.data)
})
 },[])

  return (
    <>
    <h1>Customer Contact Details</h1>
    <hr></hr>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Moblie Number</th>
        <th>Message</th>
      </tr>
      {customerData.map((item , index)=>{
      return<>

      <tr>
        <td> {}{item.name}</td>
        <td>{item.email}</td>
        <td>{item.number}</td>
        <td>{item.message}</td>
      </tr>
      </>
    })}
    </table>
 

</>
  )
}

export default Customer

