import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione consequuntur nam blanditiis totam dicta nulla tempore minus possimus, soluta sint aspernatur laborum odit vel temporibus aliquid necessitatibus architecto dignissimos facilis.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TAUCH</h2>
            <ul>
                <li>+91-969-421-5629</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
        
        </div>
        <hr />
        <p className="footer-copyright">
            {/* <img src={assets.copyright_icon} alt="" /> */}
            Copyright 2024 @ Tomato.com - All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer