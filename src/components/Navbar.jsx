import React from 'react'
import Logo from './NatsukiLogo.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={Logo} className="logo" alt="logo" />
      <ul>
        <li>About</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
