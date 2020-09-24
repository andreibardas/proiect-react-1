import React, { Component } from 'react';
import './navbar.styles.css';

export default class Navbar extends Component {
    render() {
        return (
<div className="navbar-container">
         <nav className="navbar">
             <a className="navbar-home" href="#home">HOME</a>
             <ul className="navbar-elements">
                 <li><a className="navbar-element" href="#about">About</a></li>
                 <li><a className="navbar-element" href="#blog">Blog</a></li>
                 <li><a className="navbar-element" href="#contact">Contact</a></li>
              </ul>
         </nav>
     </div>
        )
    }
}
