import React from 'react'
import data from '../database/data'
import './Invoicecard.css'

const Invoicecard = ({id, date, name, amount, status}) => {
  return (
    <div className='invoice-card'>
      <span className='invoice-id'>{id}</span>
      <span className='invoice-date'>{date}</span>
      <span className='invoice-client'>{name}</span>
      <span className='invoice-amount'>{amount}</span>



      <div className={`status-container ${status.toLowerCase()}`}>
        <div className='status-dot'></div>
        {status}
      </div>
      
      <span className='arrow-icon'>&gt;</span>
    </div>
    

    
  )
}

export default Invoicecard
