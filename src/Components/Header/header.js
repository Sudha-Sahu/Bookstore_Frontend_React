import React from "react";
import '../Header/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* Header Part */}
            <nav class="navbar navbar-expand-lg div_head">
                <div className="logo_icon">
                    <img src="./assets/education.svg" alt="" width="35" height="30" />
                </div>
                <a className="ms-2 navbar-brand" href="#" style={{ color: "#ffffff" }}>BookStore</a>

                <form class="search_form">
                    <div className="d-flex">
                        <i class="fa fa-search search_icon"></i>
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                </form>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navItem">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link active" aria-current="page" style={{ color: "#ffffff" }}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" style={{ color: "#ffffff" }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/books" className="nav-link active" style={{ color: "#ffffff" }}>Books</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link nav_icon" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="" className="dropdown-item">Admin</Link></li>
                                <li><Link to="/signin"  className="dropdown-item">Sign In</Link></li>
                                <li><Link to="/signup"  className="dropdown-item">Sign Up</Link></li>
                                <li><Link to=""  className="dropdown-item">Sign Out</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link nav_icon">     
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}
export default Header;
