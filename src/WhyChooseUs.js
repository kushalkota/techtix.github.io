import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast , faHeadset} from '@fortawesome/free-solid-svg-icons'
import './WhyChooseUs.css';
import img1 from './client demands/techsupport.gif';

export default function WhyChooseUs() {
    return (
        <div className='why-choose-us'>
            <h1 className='wcu-title'>Why Choose Us</h1>
            <div className='wcu-content'>
                <img className='ts-img-cont' src={img1} />
                <div className='ts-g box'>
                   <p>100%</p>
                   <h2>3 Month Guarantee</h2>
                </div>
                <div className='ts-pr box'>
                    <FontAwesomeIcon icon={faShippingFast} className="wcu-font" />
                    <h2>Free Shipping</h2>
                </div>

                <div className='ts-ds box'>
                <FontAwesomeIcon icon={faHeadset} className="wcu-font" />
                    <h2>Dedicated Support</h2>
                </div>
            </div>
        </div>
    )
}
