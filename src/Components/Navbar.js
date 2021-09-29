import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        
          <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Experiences</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Portofolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacts</a>
              </li>
            </ul>
          </div>
          </div> 
          
      </nav>
    )
}

export default Navbar
