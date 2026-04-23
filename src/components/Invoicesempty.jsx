import React from 'react'
import './Invoicesempty.css'
import circle from '../images/Group 3.png'
import emailcampaign from '../images/Email campaign_Flatline 2.png'

const Invoicesempty = () => {
  return (
    <div className='invoices-page-wrapper'>
    <div className='header-container'>

      <div className='header-flex-row'>
        <div className='text-section'>
          <h2 className='invoices-headline'>Invoices</h2>
          <p className='invoice-sub-headline'>No invoices</p>
        </div>

        <div className='action-items-group'>
          <select className='dropdown'>
             <option>Filter by status</option>
             <option>Paid</option>
             <option>Pending</option>
             <option>Draft</option>
          </select>
          <button className='new-invoice-CTA-button'> <img className='circle' src={circle} alt="" />New Invoice</button>

        </div>
    </div>
    </div>

    <div className='empty-state-container'>
        <img src={emailcampaign} alt="" />
        <h2>There is nothing here</h2>
        <p>Create an invoice by clicking the New Invoice button and get started</p>
    </div>
    
   </div> 
  )
}

export default Invoicesempty

