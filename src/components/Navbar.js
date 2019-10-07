import React from "react";
import appLogo from "../images/logo.jpg";
import "../styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-color p-0">
        <a class="navbar-brand" href="/">
          <img src={appLogo} className="width-logo" />
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#!">
                Acerca de
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                Gallería
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                Contacto
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link toggle-search" href="#!">
                <i class="fa fa-search"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
