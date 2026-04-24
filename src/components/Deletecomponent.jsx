import React from 'react'
import './Deletecomponent.css'

const Deletecomponent = ({onCancel}) => {
  return (
    <div className='delete-modal'>
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete invoice #XM9141? This action cannot be undone</p>
      <div className='delete-cancel-action-buttons'>
        <button onClick={onCancel} className='cancel-action-button'>Cancel</button>
        <button className='delete-button'>Delete</button>
      </div>
    </div>
  )
}

export default Deletecomponent
