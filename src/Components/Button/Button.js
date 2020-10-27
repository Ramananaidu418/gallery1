import React from "react";
import "./Button.css";


const Button = () => {

    return(
      <div className ="button-wrap">
      <button className="prevbtn">Previous</button>  
      <div className = "btnHolder">
      <div className="btn btn1">1</div>
      <div className="btn">2</div>    
      <div className="btn">3</div>    
      <div className="btn">4</div>
      </div>
      <button class="nextbtn">Next page</button>        
      </div>
    
    );
    };
    export default Button;