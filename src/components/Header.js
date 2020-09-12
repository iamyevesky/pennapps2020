import React from 'react';
import "../styles/layout.css";
import holding_hands from '../assets/holding_hands.png';

function Header() {
  return (
    <div>
        <div className="header">
            <img className="logo" src={holding_hands}></img>
            <h1>Title</h1>
        </div>
    </div>
  );
}

export default Header;
