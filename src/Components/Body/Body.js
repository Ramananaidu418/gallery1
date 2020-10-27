import React from 'react';
import "./Body.css";
import Imagecard1 from "../Imagecard1/Imagecard1";
import img2 from "../../Images/img-02.jpg"
import img3 from "../../Images/img-03.jpg"
import img4 from "../../Images/img-04.jpg"
import img5 from "../../Images/img-05.jpg"
import img6 from "../../Images/img-06.jpg"
import img7 from "../../Images/img-07.jpg"
import img8 from "../../Images/img-08.jpg"
import img9 from "../../Images/img-09.jpg"
import img10 from "../../Images/img-10.jpg"
import img11 from "../../Images/img-11.jpg"
import img12 from "../../Images/img-12.jpg"
import Button from "../Button/Button"
import Footer from "../Footer/Footer"

const Body = () => {

    return(
      <div className ="space">
      <div className="emptyspace"></div>
      <div className="latest-photos">
        <h1>Latest Photos</h1>
        <p>Pages 1 of 200</p>
      </div>
      <div className = "images">

      <Imagecard1 imgsrc = {img2}/> 
      <Imagecard1 imgsrc = {img3}/> 
      <Imagecard1 imgsrc = {img4}/> 
      <Imagecard1 imgsrc = {img5}/> 
      <Imagecard1 imgsrc = {img6}/> 
      <Imagecard1 imgsrc = {img7}/> 
      <Imagecard1 imgsrc = {img8}/> 
      <Imagecard1 imgsrc = {img9}/> 
      <Imagecard1 imgsrc = {img10}/> 
      <Imagecard1 imgsrc = {img11}/> 
      <Imagecard1 imgsrc = {img8}/> 
      <Imagecard1 imgsrc = {img12}/> 


      </div>
      <Button/>
      <Footer/>
     </div>
    
    );
    };
    export default Body;