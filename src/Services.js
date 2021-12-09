import React from 'react';
import image1 from './client demands/img-1.png';
import image2 from './client demands/img-2.png';
import image3 from './client demands/img-3.png';
import image4 from './client demands/img-4.png';
import image5 from './client demands/img-5.png';
import image6 from './client demands/img-6.png';
import './Services.css';

export default function Services() {
    return (
        <div id='services'>
        <div className="service-intro">
            <h1>
                Mobile Repair
            </h1>
            <p>
                TECHTIX is a professional mobile service center in bangalore, 
                with customer Satisfactory Solutions. We have 5 years of expertise 
                in servicing various kinds of mobile phones. We have a professionally 
                expertise and qualified technicians with highly equipped infrastructure 
                in the repair field for various brands of mobile phones. We are Specialized in
            </p>
        </div>
        <div className="service-types">
            <div className="service-card">
                <img src={image1} />
                <h1>Touch Replacement</h1>
                <p>TECHTIX is offering Touch Replacement with 3 months warranty</p>
            </div>
            <div className="service-card">
                <img src={image2} />
                <h1>Display Replacement</h1>
                <p>TECHTIX is offering Display Replacement with 3 months warranty</p>
            </div>
            <div className="service-card">
                <img src={image3} />
                <h1>Battery Replacement</h1>
                <p>TECHTIX is offering Battery Replacement with 3 months warranty</p>
            </div>
            <div className="service-card">
                <img src={image4} />
                <h1>Camera Replacement</h1>
                <p>TECHTIX is offering Camera Replacement with 3 months warranty</p>
            </div>
            <div className="service-card">
                <img src={image5} />
                <h1>Speaker Replacement</h1>
                <p>TECHTIX is offering Speaker Replacement with 3 months warranty</p>
            </div>
            <div className="service-card">
                <img src={image6} />
                <h1>Water Damage Repair</h1>
                <p>TECHTIX is offering Water Damage Repair</p>
            </div>
        </div>
    </div>

    )
}
