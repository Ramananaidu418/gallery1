import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar.js";
import Searchbar from "./Components/Searchbar/Searchbar.js";
import Body from "./Components/Body/Body.js";
// import Imagecard1 from "./Components/Imagecard1/Imagecard1.js";
// import Button from "./Components/Button/Button.js";
import Footer from "./Components/Footer/Footer.js";

const App = () => {

return(
  <div className ="container">
    <Navbar/>
    <Searchbar/>
    <Body/>
    {/* <Button/> */}
    {/* <Footer/> */}
  </div>

);
};
export default App;