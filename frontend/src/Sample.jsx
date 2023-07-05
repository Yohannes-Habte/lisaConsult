import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navigation.css";
import DropdownAbout from "./DropdownAbout";
import DropdownService from "./DropdownService";
import DropdownResearch from "./DropdownResearch";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownService, setDropdownService] = useState(false);
  const [dropdownResearch, setDropdownResearch] = useState(false);
  const [search, setSearch] = useState("");

  const smallScreenNavbarControl = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdownAbout(false)
    } else {
      setDropdownAbout(true)
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdownAbout(false)
    } else {
      setDropdownAbout(false)
    }
  };

  const onMouseEnterService = () => {
    if(window.innerWidth < 960) {
      setDropdownService(false)
    } else {
      setDropdownService(true)
    }
  };

  const onMouseLeaveService = () => {
    if(window.innerWidth < 960) {
      setDropdownService(false)
    } else {
      setDropdownService(false)
    }
  };

  const onMouseEnterResearch = () => {
    if(window.innerWidth < 960) {
      setDropdownResearch(false)
    } else {
      setDropdownResearch(true)
    }
  };

  const onMouseLeaveResearch = () => {
    if(window.innerWidth < 960) {
      setDropdownResearch(false)
    } else {
      setDropdownResearch(false)
    }
  };

  const updateChange = event => {
    event.preventDefault();
    setSearch(event.target.value)
  }

  return (
    <div className="header-container">
      <nav className="navigation-bar">
        <div className="logo-container">
          <NavLink to="/">
            <img className="logo" src={logo} alt="Logo of LisaConsult" />
          </NavLink>

          <NavLink to="/" className="logo-text"> LisaConsult </NavLink>
        </div>

        <div className="menu-icon" onClick={smallScreenNavbarControl}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink 
              to="/" 
              className="nav-links" 
              onClick={closeMobileMenu}
              style={({ isActive }) => ({
                color: isActive && 'pink',
                pointerEvents: isActive && 'none',
              })}> 
              Home 
            </NavLink>
          </li>

          <li 
            className="nav-item service" 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
          >
            <NavLink 
              to="/about" 
              className="nav-links" 
              onClick={closeMobileMenu}
              style={({ isActive }) => ({
                color: isActive && 'pink',
                pointerEvents: isActive && 'none',
              })}> 
              About <i className="fas fa-caret-down"/> 
            </NavLink>
            {dropdownAbout && <DropdownAbout/>}
          </li>

          <li 
            className="nav-item service" 
            onMouseEnter={onMouseEnterService} 
            onMouseLeave={onMouseLeaveService}
          >
            <NavLink 
              to="/services" 
              className="nav-links" 
              onClick={closeMobileMenu}
              style={({ isActive }) => ({
                color: isActive && 'pink',
                pointerEvents: isActive && 'none',
              })}> 
              Services <i className="fas fa-caret-down"/>  
            </NavLink>
            {dropdownService && <DropdownService/>}
          </li>

          <li 
            className="nav-item service" 
            onMouseEnter={onMouseEnterResearch} 
            onMouseLeave={onMouseLeaveResearch}
          >
            <NavLink 
              to="/research" 
              className="nav-links" 
              onClick={closeMobileMenu}
              style={({ isActive }) => ({
                color: isActive && 'pink',
                pointerEvents: isActive && 'none',
              })}> 
              Research <i className="fas fa-caret-down"/>  
            </NavLink>
            {dropdownResearch && <DropdownResearch/>}
          </li>

          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className="nav-links" 
              onClick={closeMobileMenu}
              style={({ isActive }) => ({
                color: isActive && 'pink',
                pointerEvents: isActive && 'none',
              })}> 
              Contact 
            </NavLink>
          </li>
        </ul>

        <div className="navbar-search-btn">
          <input type="text" name="search" onChange={updateChange} value={search} placeholder="Type Here" />  
          <button type="submit"> Search </button>
        </div>

      </nav>
    </div>
  );
};

export default Navigation;