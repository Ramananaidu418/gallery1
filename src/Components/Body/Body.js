import React from 'react';
import "./Body.css";
import Imagecard1 from "../Imagecard1/Imagecard1";

const Body = () => {

    return(
      <div className ="space">
      <div className="emptyspace"></div>
      <div className="latest-photos"><h1>Latest Photos</h1></div>
      <div className = "images">

      <Imagecard1/>
      <Imagecard1/> 
      <Imagecard1/> 
      <Imagecard1/> 
      <Imagecard1/>
      <Imagecard1/> 
      <Imagecard1/> 
      <Imagecard1/> 
      <Imagecard1/>
      <Imagecard1/> 
      <Imagecard1/> 
      <Imagecard1/> 

      </div>
     
      </div>
    
    );
    };
    export default Body;