
import  Axios  from 'axios'
import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

const Login = () => {
  const navgitor = useNavigate()
   const [username , setusername] = useState('')
   const [password , setpassword] = useState('')
   const [role , setRole] = useState('admin')
  Axios.defaults.withCredentials = true
   const myData= (e)=>{
    e.preventDefault()
    Axios.post('http://localhost:8081/admin/login' ,{
      username , password , role
    }).then(res=>{
      console.log(res)
   
   if(res.data.login && res.data.role === 'admin'){
toast.success('login suceessfully',{
  position:'top-right',
  autoClose:5000
})
navgitor('/dashboard')


   }
   
 


    }).catch(err=>{
      console.log("error" + err)
    })
   

    console.log(username , password)
   }
  
  return (
    <>
     <div className='contact'>
          <h1>Login In</h1>
           <div className='contact-box'>

           <div className='form-container'>
         <form  className='form'   >
         <div className='form-group'>
          <label htmlFor='username' className='form-label'>userName</label>
          <input type='username' placeholder='enter your username' name='username' onChange={(e)=>{setusername(e.target.value)}}/>
         </div>
         <div className='form-group'>
          <label htmlFor='password' className='form-label'>password</label>
          <input type='password' placeholder='********' name='password'onChange={(e)=>{setpassword(e.target.value)}}/>
         </div>
         <div className='form-group'>
          <label htmlFor='role' className='form-label'>Role</label>
          <select name='role' id='role' onChange={(e)=>{setRole(e.target.value)}}>
            <option value= 'admin'>admin</option>
          </select>
         </div>
       
         <button className='btn-form'  onClick={myData}>sumbit</button>
         </form>
           </div>
           </div>
         </div>
    </>
  )
}

export default Login