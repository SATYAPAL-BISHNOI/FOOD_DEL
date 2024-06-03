import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setshowLogin}) => {

    const [manu,setManu] = useState("home");

    const {getCartTotalAmount} = useContext(StoreContext);



  return (
    <div className='navbar'>
        <Link to='/'>
            <img src={assets.logo} alt="" className="logo" />
        </Link>
        <ul className="navbar-manu">
            <Link to={'/'} onClick={()=>setManu("home")} className={manu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setManu("manu")} className={manu==="manu"?"active":""}>Manu</a>
            <a href='#appD' onClick={()=>setManu("mobile-app")} className={manu==="mobile-app"?"active":""}>Mobile-App</a>
            <a href='#footer' onClick={()=>setManu("contect-us")} className={manu==="contect-us"?"active":""}>contect us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'>
                <img src={assets.basket_icon} alt="" />
                </Link>
                <div className={getCartTotalAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setshowLogin(true)}>Sing In </button>
        </div>
    </div>
  )
}

export default Navbar