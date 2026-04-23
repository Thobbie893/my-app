import React from 'react'
import './Editmode.css'
import calendar from '../images/Shape.png'

const Editmode = () => {
  return (
    <div className='edit-form'>
      <form>
        <h2>Edit #XM9141</h2>
        <p>Bill from</p>

    <div className='form-input-group'>
        <label>Street Address</label><br></br>
        <input className='address-input-field' type="text" placeholder='Enter your street address' />
    </div>

    <div className='city-form-input-group'>
        <div>
        <label>City</label><br></br>
        <input className='city-input-field' type="text" placeholder='Enter your city' />
        </div>

        <div>
        <label>Post Code</label><br></br>
        <input className='postcode-input-field' type="text" name="" id="" placeholder='Enter your postcode' />
        </div>

        <div>
        <label>Country</label><br></br>
        <input className='country-input-field' type="text" name="" id="" placeholder='Enter your country' />
        </div>
    </div>
        
        <p>Bill to</p>
        <div className='client-name-input-field-container'>
            <label>Client's Name</label>
            <input className='client-name-input-field' type="text" placeholder='Enter your name' />
        </div>

        <div className='client-email-input-field-container'>
            <label>Client's Email</label><br></br>
            <input className='client-email-input-field' type="text" placeholder='Enter your email' />
        </div>

        <div className='city-form-input-group'>
        <div>
        <label>City</label><br></br>
        <input className='city-input-field' type="text" placeholder='Enter your city' />
        </div>

        <div>
        <label>Post Code</label><br></br>
        <input className='postcode-input-field' type="text" name="" id="" placeholder='Enter your postcode' />
        </div>

        <div>
        <label>Country</label><br></br>
        <input className='country-input-field' type="text" name="" id="" placeholder='Enter your country' />
        </div>
        </div>

        <div className='date-and-payment-input-field-container'>
            <div className='date-input-field'>
                <label>Invoice Date</label><br></br>
                <input type="date" name="" id="" className='date-input'  />
            </div>

            <div className='payment-term-dropdown-container'>
            <label>Payment Terms</label>
            <select className='payment-term-dropdown'>
                <option>Next 30 days</option>
                <option>Next 40 days</option>
                <option>Next 100 days</option>
            </select>
            </div>
            <div></div>

        </div>

        <div className='project-description-container'>
            <label>Project Description</label>
            <input className='project-description-input-field' type="text" placeholder='Enter your project' />
        </div>
      </form>
    </div>
  )
}

export default Editmode
