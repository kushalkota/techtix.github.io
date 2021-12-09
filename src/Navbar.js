import React from 'react'
import './Navbar.css';
import logo1 from './client demands/techtix-logo.png';
import logo2 from './client demands/name.jpg';

export default function Navbar() {
    return (
        <div id="navbar">
        <div className="nav-title">
            <img className='company-logo' src={logo1} />
            <img className='company-name' src={logo2} />
        </div>
        <div className="nav-content-body">
            <div className="nav-content"><a href='#home'>Home</a></div>
            <div className="nav-content"><a href='#services'>Services</a></div>
            <div className="nav-content"><a href='#maps-and-info'>Find Us</a></div>
            <div className="nav-content"><a href='#contact-us'>Contact</a></div>
        </div>
    </div>
    )
}
