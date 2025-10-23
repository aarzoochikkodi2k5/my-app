import React from 'react';
import '../styles.css';

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <div>
            <footer className="footer">
                <p className="footer-text"> {currentYear} All rights Reserved!</p>
            </footer>
        </div>
    )
}