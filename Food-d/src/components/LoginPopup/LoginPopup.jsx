import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setshowLogin}) => {

    const [currState,setCurrState] = useState("Login")

  return (
    <div className='login-popup' id='login-popup'>
       <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">

            {currState==="Login"?<></>
            :<input type="text" placeholder='Your Name' required />
            }

            <input type="email" placeholder='Your Email' required/>
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sing Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the trems of use & privacy policy</p>
        </div>
        {currState==="Sing Up"
        ?<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        :<p>Don't have an account? <span onClick={()=>setCurrState("Sing Up")}> Sign up here</span></p>
        }
        
        
       </form>
    </div>
  )
}

export default LoginPopup