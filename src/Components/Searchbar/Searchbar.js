import React from "react";
import App from "../../App";
import "./Searchbar.css";
import hero from "../../Images/hero.jpg"
const Searchbar = () => {

    return(
      <div className ="searchbar"> 
      <img src={hero}></img>
      <form className="bar" action="action_page.php">
      <input type="text" placeholder="Search" name="search"></input>
      <button type="submit"><i class="fa fa-search"></i></button>
      </form>
      </div>
    );
    };
    export default Searchbar;
    