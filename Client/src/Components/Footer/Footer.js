import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach me at - Anitha -{" "}
          <a className="mail-links" href="mailto:anitha11062005@gmail.com">
           anitha11062005@gmail.com
          </a>
        </p>
        <p>
          <a
            className="contact-links"
            href="https://www.linkedin.com/in/anitha2005/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square"></i> Linkedin
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://github.com/Anitha-selvaraj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i> GitHub
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
        </p>
        <p>&copy; 2025 Anitha Selvaraj</p>
      </div>
    </footer>
  );
};

export default Footer;
