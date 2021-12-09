import React from 'react';
import './Home.css';
import pic1 from './client demands/home-page.png';

export default function Home() {
    return (
        <div id='home'>

            <div className="division2">
                <img className='img' src={pic1} alt="phones" />
            </div>

            <div className='division1'>
                <h1>Best Authorized service center in Banglore</h1>
                <p>Leave all your worries about your damaged phone, 
                TECHTIX is here to help you fix all your issues 
                at your door step with in the same day
                </p>
                <a href='#maps-and-info'>BOOK NOW</a>
            </div>
            
        </div>
    )
}
