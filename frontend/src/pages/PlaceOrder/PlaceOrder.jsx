import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const {getCartTotalAmount} = useContext(StoreContext)

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delevery Information</p>
        <div className="multi-fildes">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fildes">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fildes">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Toatal</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getCartTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delevery Fee</p>
              <p>${getCartTotalAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getCartTotalAmount()===0?0:2+getCartTotalAmount()}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder