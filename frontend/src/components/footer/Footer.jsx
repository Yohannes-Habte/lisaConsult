import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/lisaConsult-logo.png"
import { FaGithubSquare, FaLinkedin, FaYoutube, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { MdOutlineMail, MdPhoneInTalk, MdOutlineMessage, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections-container">
        <section className="footer-sitemap">
          <h2> Sitemap </h2>
          <ul>
            <li> <NavLink to="/"> About </NavLink> </li>
            <li> <NavLink to="/courses"> Service </NavLink> </li>
            <li> <NavLink to="/research"> Research </NavLink> </li>
            <li> <NavLink to="/courseRegistration"> Registration </NavLink> </li>
            <li> <NavLink to="/career"> Careers </NavLink> </li>
          </ul>
        </section>

        <section className="footer-company">
          <h2> Company </h2>
          <ul>
            <li> <NavLink to="/story"> Our Story </NavLink> </li>
            <li> <NavLink to="/team"> Our Team </NavLink> </li>
            <li> <NavLink to="/projects"> Projects </NavLink> </li>
            <li> <NavLink to="/awards"> Award </NavLink> </li>
            <li> <NavLink to="/clients"> Clients </NavLink> </li>
          </ul>
        </section>

        <section className="footer-social">
          <h2> Social </h2>
          <ul>
            <li> <a href="https://www.linkedin.com/in/yohannes-habtemariam/" target="_blank"> <FaLinkedin className="footer-icon"/> LinkedIn </a> </li>
            <li> <a href="https://www.facebook.com/profile.php?id=100009710022882" target="_blank"> <FaFacebookSquare className="footer-icon"/> Facebook </a> </li>
            <li> <a href="https://www.youtube.com/" target="_blank"> <FaYoutube className="footer-icon"/> YouTube </a> </li>
            <li> <a href="https://github.com/Yohannes-Habtemariam" target="_blank"> <FaGithubSquare className="footer-icon"/> Github </a> </li>
            <li> <a href="https://twitter.com/" target="_blank"> <FaTwitterSquare className="footer-icon"/> Twitter </a> </li>
          </ul>
        </section>

        <section className="footer-contact">
          <h2> Contact </h2>
          <ul>
            <li> <a href="mailto:uelandrae@gmail.com"> <MdOutlineMail className="footer-icon"/> Email </a> </li>
            <li> <a href="tel:+4917681005650"> <MdPhoneInTalk className="footer-icon"/> Call</a> </li>
            <li> <a href="tel:+4917681005650"> <MdLocationOn className="footer-icon"/> Location</a> </li>
            <li> <NavLink to="/contact"> <MdOutlineMessage className="footer-icon" /> Comments</NavLink> </li>
          </ul>
        </section>
      </div>
      <div className="footer-copyright">
        <p className="compyright"> &copy; 2022 LisaConsult. All rights reserved! </p>
        <figure className="footer-logo">
          <NavLink to="/" > <img src={logo} alt="Logo of LisaConsult" /> </NavLink>
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
