import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [selectStyle, setSelectStyle] = useState({});
    const navRef = useRef(null);

    const navLinks = [
        { path: "/", label: "Accueil" },
        { path: "/evenement", label: "L'événement" },
        { path: "/vote", label: "Vote tes jeux" },
        { path: "/contact", label: "Contact" },
    ];

    useEffect(() => {
        const activeLink = navRef.current?.querySelector(".active");

        if (activeLink) {
            const { offsetLeft, offsetWidth } = activeLink;
            setSelectStyle({
                left: `${offsetLeft}px`,
                width: `${offsetWidth}px`,
                opacity: 1,
            });
        }
    }, [location.pathname]);

    return (
        <div className="navbar-container">
            <nav className="nav-links" ref={navRef}>
                <ul>
                    <span className="select" style={selectStyle}></span>

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
