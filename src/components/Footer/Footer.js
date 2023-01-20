import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-div">
          <div id="logo">
            <span className="logo-name">Sayesta Goswami, PhD</span>
            <h6 className="logo-title">CLINICAL PSYCHOLOGIST</h6>
          </div>
          <div id="contact-details">
            <div className="infos my-4">
              <img src="https://i.ibb.co/r7xWGq5/call.png" alt="" />
              <p className="contact-info">
                Anchal Tower, Sixmile,
                <br /> Guwahati, Assam 781022, India
              </p>
            </div>
            <div className="infos my-4">
              <img src="https://i.ibb.co/bHs3MB6/location.png" alt="" />
              <p className="contact-info" id="phone-num">
                +918333552221
              </p>
            </div>
            <div className="infos my-4">
              <img src="https://i.ibb.co/3vs37VD/Group-3.png" alt="" />
              <p className="contact-info">sayestagoswami.pt@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-div">
          <h4 id="quick-links">Quick Links</h4>
          <p id="book-session">Book Session</p>
          <p id="about-me">About Me</p>
          <p id="contact-us">Contact Us</p>
        </div>
        <div className="footer-div">
          <h4 id="legal">Legal Stuff</h4>
          <p id="disclaimer">Disclaimer</p>
          <p id="privacy">Privacy Policy</p>
          <p id="terms">Terms of Services</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p id="rights">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
