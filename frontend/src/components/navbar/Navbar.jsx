import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import lisaConsultLog from "../../assets/lisaConsult-logo.png";
import successfulInvestor from "../../assets/investing.png";
import SearchBar from '../searchBar/SearchBar';

const Navbar = () => {
    // State Variables
    const [clicked, setClicked] = useState(false);

    const handleClickChange = () => setClicked(!clicked);

  return (
    <header className='header-container'>
        <nav className='header-navbar'>
            <div className='language-register-login-container'>
                <h4 className='header-discount-text'>Register Today and Save at Least 20% Discount</h4>
                <div className='register-login'>
                    <NavLink to="/register"> Register </NavLink>
                    <NavLink to="/login"> Login </NavLink>
                    <select name="language" className='languages'>
                        <option value="default">Select Language</option>
                        <option value="english">English</option>
                        <option value="deutsch">German</option>
                        <option value="tigrigna">Tigrigna</option>
                    </select>
                </div>
            </div>

            <div className='logo-search'>
                <figure className='logo-container'>
                    <NavLink to="/"><img className='mission-logo' src={lisaConsultLog} alt="LisaConsult Logo" /></NavLink>
                </figure>

                <div className='search-btn'>
                    <SearchBar />
                </div>

                <figure className='whereToInvestImage'>
                    <NavLink to="/"><img className='successful-investor' src={successfulInvestor} alt="Logo" /></NavLink>
                </figure>

            </div>
                
            <div className='text-logo-header-nav-menu'>
                <h3> <NavLink to="/">LisaConsult</NavLink></h3>
                <ul className={clicked ? 'header-nav-menu active' : 'header-nav-menu'}>
                    <li onClick={handleClickChange} className="header-nav-item">
                        <NavLink to="/" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> Home </NavLink>
                    </li>

                    <li onClick={handleClickChange} className="header-nav-item">
                        <NavLink to="/procedures" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> Procedures  </NavLink>
                    </li>

                    <li onClick={handleClickChange} className="header-nav-item">
                        <NavLink to="/courses" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> Courses </NavLink>
                    </li>

                    <li onClick={handleClickChange} className="header-nav-item">
                        <NavLink to="/research" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> Research </NavLink>
                    </li>

                    <li onClick={handleClickChange} className="header-nav-item">
                        <NavLink to="/contact" style={({ isActive }) => ({ textDecoration: isActive && "underline", color: isActive && "red"})}> Contact </NavLink>
                    </li>
                
                </ul>
            </div>

            <div className="menu-icon" onClick={handleClickChange}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

        </nav>
    </header>
  )
}

export default Navbar;