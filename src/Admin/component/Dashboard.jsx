import React from 'react'
import {  Outlet } from 'react-router-dom'
import SildeBar from './SildeBar'
import '../CSS/Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="dashboard-sildeBar">

<SildeBar/>

      </div>
      <div className="dashboard-content">
  <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
