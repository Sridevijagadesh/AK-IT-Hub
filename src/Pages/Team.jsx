import React from 'react'
import '../Pages/CSS/team.css'

const Team = () => {
  return (
    <div>
      <div className='team'>
        <h1>OUR TEAM</h1>
        <h4>TEAM COMING TOGETHER IS A BEGINNING.</h4>
        <p>Keeing together is progress.</p>
        <p>Working together is success.</p>
        <img src='https://clipart-library.com/images_k/teamwork-transparent-background/teamwork-transparent-background-8.png' alt=''/>
      </div>
       <div className='team-container'>
          <h1>Our Leadership team</h1>
          <p>with over 10 years of experiene , we've got a well-seasoned team at the help</p>
          <div className='team-box'>
            <div className="team-box1">
            <img src='https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png' alt=''></img>
            <h4>Mr. Amith kapure</h4>
            <p>CO-FOUNDER</p>
            </div>
            <div className="team-box1">
            <img src='https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png' alt=''></img>
            <h4>Mr. Amith kapure</h4>
            <p>Frontend Developer</p>
            </div>
            <div className="team-box1">
            <img src='https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png' alt=''></img>
            <h4>Mr. Amith kapure</h4>
            <p>Backend Developer(PHP)</p>
            </div>
            <div className="team-box1">
            <img src='https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png' alt=''></img>
            <h4>Mr. Amith kapure</h4>
            <p>Backend Developer(Node Js)</p>
            </div>

          </div>
         
         </div>
    </div>
  )
}

export default Team
