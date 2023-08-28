import React from "react";
import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      <a class="navbar-brand" href="#">
      <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="Logo" width="80" height="64" class="d-inline-block align-text-center"/>
      RAJO
    </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-20">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">How It Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
