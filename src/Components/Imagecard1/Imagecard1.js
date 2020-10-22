import React from "react";
import "./Imagecard1.css";
// import img1 from "../../Images/img1.jpg"

import img1 from "../../Images/img1.jpg"

const Imagecard1 = () => {

    return(
      <div className ="card">
      <div className="Imagecard1">
      <img src={img1}></img>

      </div>   
      <div className = "viewsContainer">
          <p>views:1000</p>
          <p>date:20-10-19</p>
      </div>
        
      </div>
    
    );
    };
    export default Imagecard1;