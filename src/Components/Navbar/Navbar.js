import React from "react";
import "./Navbar.css";
const Navbar = () => {

    return(
      <div className ="navbar">
        <div className="navbar-wrapper">

          <div className="logo">
          <span class="material-icons">view_day</span>
          <h1>Catalogz</h1>
          </div>
          <div className="menu">
            <ul className="menu-ul">
            <li><a href="#">Photos</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
              
            </ul>
            {/* <a href="#">Photos</a>
            <a href="#">Videos</a>
            <a href="#">About</a>
            <a href="#">Contact</a> */}
         </div>
          </div>
          {/* <div className="photos">Photos</div>
          <div className="videos">Videos</div>
          <div className="about">About</div>
          <div className="contact">Contact</div> */}
      </div>
    
    );
    };
    export default Navbar;