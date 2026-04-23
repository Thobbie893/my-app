import React from 'react'

const Editinvoice = () => {
  return (
    <div className='main-container'>
    <div className='real-invoice-main-container'>
      <h4>Go back</h4>
      <div className='action-buttons-main-container'>
        <div className='status-indicator'>
            <div>
                <p>Status</p>
            </div>
            <div className='Pending-status-indicator'>
               <h3>Pending</h3> 
            </div>
        </div>
        <div className='action-buttons-container'>
            
                <button className='edit-button'>Edit</button>
            
                <button className='delete-button'>Delete</button>
            
                <button className='status-button'>Mark as Paid</button>
            
        </div>
      </div>
      
    </div>
    <div className='invoice-container'>
        <div className='id-address-container'>
            <div className='client-id-course'>
                <h3>#XM9141</h3>
                <p>Graphic Design</p>
            </div>
            <div className='client-address'>
                <p>19 Union Terrace<br></br>
                    London 
                    E1 3EZ<br></br>
                   United Kingdom</p>
            </div>
        </div>
        <div className='invoice-details'>
            <div className='invoice-date'>
                <p>Invoice Date</p>
                <h4>21 Aug 2021</h4>
            </div>
            <div className='client-name'>
                <p>Bill to</p>
                <h4>Alex Grim</h4>
            </div>
            <div className='client-gmail'>
                <p>Sent to</p>
                <h4>alexgrim@mail.com</h4>
            </div>
        </div>
        <div className='clients-payment-date-address-container'>
            <div className='invoice-due-date'>
                <p>Payment Due</p>
                <h4>20 Sep 2021</h4>
            </div>
            <div className='client-address'>
                <p>84 Church Way<br></br>
                   Bradford<br></br>
                   BD1 9PB<br></br>
                   United Kingdom</p>
            </div>
        </div>

        <div className='overall-receipt-container'>
            <div>
                <div className='invoice-quantity'>
                    <div className='item-name'>
                        <p>Item Name</p>
                        <h4>Banner Design</h4>
                        <h4>Email Design</h4>
                    </div>
                    <div className='invoice-calculations'>
                        <div className='quantity'>
                        <p>QTY</p>
                        <h4>1</h4>
                        <h4>2</h4>
                        </div>
                        <div className='price'>
                            <p>Price</p>
                            <h4>156.00</h4>
                            <h4>200.00</h4>
                        </div>
                        <div className='total'>
                            <p>Total</p>
                            <h4>156.00</h4>
                            <h4>400.00</h4>
                        </div>
                    </div>
                </div>
                <div className='amount-due-container'>
                    <div>
                        <p>Amount Due</p>
                    </div>
                    <div>
                        <h4>556.00</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Editinvoice
