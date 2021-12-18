import React from 'react';
import './LaptopRepairs.css';
import img1 from './client demands/laptop-repairs.jpg';
import img2 from './client demands/lap-motherboard.png';
import img3 from './client demands/lap-dis.png';
import img4 from './client demands/lappp-battery.png';
import img5 from './client demands/lap-hard.png';

export default function LaptopRepairs() {
    return (
        <div className="laptop-repairs">
            <div className="lp-img-container">
                <img className='lp-img' src={img1} alt='latop repairs' />
            </div>
            <div className='laptop-repairs-content'>
                <h1 className="laptop-repairs-title">Laptop Repair</h1>
                <div className="laptop-repair-details">
                    <div className="lp-card">
                        <img src={img2} alt='motherboard' />
                        <h2>Motherboard Replacement</h2>
                        <p>New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                    </div>
                    <div className="lp-card">
                        <img src={img3} alt='laptop display' />
                        <h2>Display Replacement</h2>
                        <p>New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                    </div>
                    <div className="lp-card">
                        <img src={img4} alt='laptop battery' />
                        <h2>Battery Replacement</h2>
                        <p>New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                    </div>
                    <div className="lp-card">
                        <img src={img5} alt='latop harddisk' />
                        <h2>Hard Disk Replacement</h2>
                        <p>New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
