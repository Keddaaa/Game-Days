import React from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { path: "/", label: "Accueil" },
        { path: "/evenement", label: "L'événement" },
        { path: "/vote", label: "Vote tes jeux" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <div className="navbar-container">
            <nav className="nav-links">
                <ul>
                    <span className="select"></span>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={
                                    location.pathname === link.path
                                        ? "active"
                                        : ""
                                }
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="nav-login">
                <Link to="/login" className="login-btn">
                    S'inscrire/connexion
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
