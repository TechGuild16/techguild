import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import Logo from '../assets/Images/techGuild2.png'; // Ensure correct path to your logo

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mt-3 px-4">
            <div className="container-fluid">
                <NavLink className="navbar-brand d-flex align-items-center" to="#">
                    <img src={Logo} alt="Tech Guild" className="imageLogo me-3" />
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-lg-5 gap-lg-4 gap-md-3">
                        <li className="nav-item">
                            <NavLink className="nav-link fs-5" to="#">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-5" to="#">Solutions</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-5" to="#">Resources</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-5" to="#">Pricing</NavLink>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center gap-lg-3 gap-md-2 gap-sm-1">
                        <NavLink className="nav-link fs-5 contact" to="#">Contact</NavLink>
                        <button className="btn btn-dark getStart">Get Started</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
