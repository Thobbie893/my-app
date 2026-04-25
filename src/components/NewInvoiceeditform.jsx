import React from 'react';


const NewInvoiceeditform = () => {
  return (
    <div>
      <form>
        <h2>New Invoice</h2>
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

        <div className='product-details'>
            <h2>Item List</h2>
            <div className='product-details-table'>
            <div className='item-name'>
                <p>Item Name</p>
                <h4>Banner Design</h4>
                <h4>Email Design</h4>
            </div>
            <div className='qty-number'>
                <p>Qty</p>
                <h4>1</h4>
                <h4 className='qty-number-two'>2</h4>
            </div>
            <div className='price-tag'>
                <p>Price</p>
                <h4 className='first-price-tag'>156.00</h4>
                <h4 className='second-price-tag'>200.00</h4>
            </div>
            <div className='total-price'>
                <p>Total</p>
                <h4 className='first-total-price'>156.00</h4>
                <h4 className='second-total-price'>400.00</h4>
            </div>
            <div className='delete-icon'>
            <img className='delete-icon-one' src={bin} alt="" /><br></br>
            <img className='delete-icon-two' src={bin} alt="" />
            </div>
            </div>
        </div>
        <button type='button' className='add-CTA-button'>+ Add New Item</button>
        <div className='form-action-buttons'>
            <button type='button' onClick={onClose} className='cancel-action-button'>Cancel</button>
            <button type='submit' className='save-changes-action-button'>Save Changes</button>
        </div>
      </form>
    </div>

    
  )
}

export default NewInvoiceeditform
