import React from "react";
import appLogo from "./images/logo.jpg";
import "./styles/Navbar.css";

function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">
            <img className="img width-logo" src={appLogo} alt="Logo" />
          </a>
        </nav>
      </header>
    </div>
  );
}

export default App;
