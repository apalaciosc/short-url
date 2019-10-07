import React from "react";
import appLogo from "../images/logo.jpg";
import "../styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-light navbar-color">
          <a className="navbar-brand">
            <img className="img width-logo" src={appLogo} alt="Logo" />
          </a>
        </nav>
      </header>
    );
  }
}

export default Navbar;
