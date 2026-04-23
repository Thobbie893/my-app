import React from 'react'
import './Invoicesfilled.css'
import circle from '../images/Group 3.png'
import Invoicecard from './database/Invoicecard'
import { invoice } from './database/data'

const Invoicesfilled = () => {
  return (
    
    <div className='invoices-container'>
    
      <div className='header-flex-row'>
        <div className='text-section'>
          <h2 className='invoices-headline'>Invoices</h2>
          <p className='invoice-sub-headline'>There are 7 total invoices</p>
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

        {/* Map Logic */}
        <div className='invoice-list'>
        {invoice.map((item) => (
          <Invoicecard 
            key={item.id} 
            id={item.id}
            date={item.date}
            name={item.name}
            amount={item.amount}
            status={item.status}
          />
        ))}
      </div>
    </div>
  )
}
    

      


export default Invoicesfilled


    

      







