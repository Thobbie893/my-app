import React from 'react'
import './Sidebar.css';
import piechart from '../images/Combined Shape.png'
import moon from '../images/Path.png'
import photo from '../images/Oval.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div>
        <div className='icon-container'>
        <img className='piechart-icon' src={piechart} alt="" />
        </div>
        <div className='container'>
           <img className='moon' src={moon} alt="" />
           <hr></hr>
           <img className='profile-picture' src={photo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
