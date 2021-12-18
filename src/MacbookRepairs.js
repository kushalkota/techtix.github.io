import React from 'react';
import './MacbookRepairs.css';
import img1 from './client demands/MAC BOOK PRO.png';
import img2 from './client demands/lap-motherboard.png';
import img3 from './client demands/lap-dis.png';
import img4 from './client demands/lappp-battery.png';
import img5 from './client demands/lap-hard.png';

export default function MacbookRepairs() {
    return (
        <div className="macbook-repairs">
            <div className='macbook-repairs-content'>
                <h1 className="macbook-repairs-title">Apple Macbook Repair</h1>
                <div className="macbook-repair-details">
                    <div className="mb-card">
                        <img src={img2} alt='mac motherboard' />
                        <h2>Motherboard Replacement</h2>
                        <p>New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                    </div>
                    <div className="mb-card">
                        <img src={img3} alt='mac-display' />
                        <h2>Display Replacement</h2>
                        <p>New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                    </div>
                    <div className="mb-card">
                        <img src={img4} alt='mac battery' />
                        <h2>Battery Replacement</h2>
                        <p>New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                    </div>
                    <div className="mb-card">
                        <img src={img5} alt='mac harddisk' />
                        <h2>Hard Disk Replacement</h2>
                        <p>New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                    </div>
                </div>
            </div>

            <div className="mb-img-container">
                <img className='mb-img' src={img1} alt='mac repairs' />
            </div>

        </div>
    )
}
