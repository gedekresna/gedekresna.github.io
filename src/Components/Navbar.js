import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        
          <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
               <Link smooth={true} to="home" offset={-110} className="nav-link" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
              <Link smooth={true} to="about-me" offset={-110} className="nav-link" href="#">About Me</Link>
              </li>
              <li className="nav-item">
              <Link smooth={true} to="service" offset={-110} className="nav-link" href="#">Service</Link>
              </li>
              <li className="nav-item">
              <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Experiences</Link>
              </li>
              <li className="nav-item">
              <Link smooth={true} to="portofolio" offset={-110} className="nav-link" href="#">Portofolio</Link>
              </li>
              <li className="nav-item">
              <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contacts</Link>
              </li>
            </ul>
          </div>
          </div> 
          
      </nav>
    )
}

export default Navbar
