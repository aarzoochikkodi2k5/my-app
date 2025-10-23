import React from 'react';
import '../styles.css';

export default function Header(){
    return (<>
    <div className="header">
        <img className="logo" src="logo.png" alt="Logo" />
        <h1 className="title">Popcorn’s calling and the screen’s waiting. Let’s roll!</h1>
    </div>
    </>)
};