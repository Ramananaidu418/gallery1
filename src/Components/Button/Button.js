import React from "react";
import "./Button.css";


const Button = () => {

    return(
      <div className ="button-wrap">
      <button class="prevbtn">Previous</button>  
      <div className="btn">1</div>
      <div className="btn">2</div>    
      <div className="btn">3</div>    
      <div className="btn">4</div>
      <button class="nextbtn">Next page</button>        
      </div>
    
    );
    };
    export default Button;