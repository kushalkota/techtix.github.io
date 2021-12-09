import React from 'react';
import './Body.css';
import ContactUs from './ContactUs';
import Home from './Home';
import LaptopRepairs from './LaptopRepairs';
import MacbookRepairs from './MacbookRepairs';
import MapsAndInfo from './MapsAndInfo';
import Navbar from './Navbar';
import ServiceCarousel from './ServiceCarousel';
import Services from './Services';
import TermsAndConditions from './TermsAndConditions';
import WhyChooseUs from './WhyChooseUs';

export default function Body() {
    return (
        <div className='body'>
            <Navbar />
            <Home />
            <Services />
            <LaptopRepairs />
            <MacbookRepairs />
            <ServiceCarousel />
            <WhyChooseUs />
            <ContactUs />
            <MapsAndInfo />
            <TermsAndConditions />
        </div>
    )
}
