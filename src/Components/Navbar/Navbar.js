import React from "react";
import "./Navbar.css";
const Navbar = () => {

// burger.addEventlistener('click',()=>{
//   na
// })
    return(
      <div className ="navbar">
        <div className="navbar-wrapper">
          {/* <input type="checkbox" className="check"><i class ="fas fa bars"></i></input> */}
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
            <div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
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