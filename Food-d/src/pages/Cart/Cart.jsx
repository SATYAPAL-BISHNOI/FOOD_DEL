import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

      const {cartItem,food_list,removeFromCart,getCartTotalAmount} = useContext(StoreContext)

      const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item,index)=>{
            if(cartItem[item._id]>0){
              return(
                <>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price*cartItem[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
                </>
              )
            }
          })
        }
      </div>
      <div className="cart-bottam">
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
          <button onClick={()=>navigate('/Order')}>PROCEED TO CHECHOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='PROMO CODE' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart