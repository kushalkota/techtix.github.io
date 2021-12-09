import React from 'react'
import './ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faEnvelope, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'

export default function ContactUs() {
    return (
        <div id='contact-us'>
            <div className='contact-us-title'>
                <h1>Contact Us</h1>
                <p>It's time to choose the best</p>
            </div>
            <div className='contact-us-content'>
                <div className='cu-card'>
                    <FontAwesomeIcon className="fas fa-phone" icon={faPhone} />
                    <p>8618281530</p>
                    <p>8618823858</p>
                </div>
                <div className='cu-card'>
                    <FontAwesomeIcon className="fas fa-envelope" icon={faEnvelope} />
                    <p>TECHTRONIXMA@gmail.com</p>
                </div>
                <div className='cu-card'>
                    <FontAwesomeIcon className="fas fa-map-marked-alt" icon={faMapMarkedAlt} />
                    <p>NO,1360,50ft main road,15th cross,1st stage,kumaraswamy layout, Bangalore-560111</p>
                </div>
            </div>
        </div>
    )
}
