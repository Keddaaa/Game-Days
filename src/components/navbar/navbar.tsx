import { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("accueil");
    const [selectStyle, setSelectStyle] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = authService.getUser();
        setIsLoggedIn(!!user);
    }, []);

    const handleLogout = () => {
        authService.logout();
        setIsLoggedIn(false);
        setShowLogoutPopup(true);
        setTimeout(() => {
            setShowLogoutPopup(false);
            navigate("/");
        }, 2000);
    };

    const navLinks = [
        { id: "accueil", label: "Accueil" },
        { id: "evenement", label: "L'événement" },
        { id: "vote", label: "Vote tes jeux" },
        { id: "contact", label: "Contact" },
    ];

    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection(sectionId);
        }
    };

    // Update active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["accueil", "evenement", "vote", "contact"];
            const scrollPosition = window.scrollY + 100; // Offset for navbar

            // Check if we're at the bottom of the page (contact section)
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            if (window.scrollY + windowHeight >= documentHeight - 50) {
                setActiveSection("contact");
                return;
            }

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Update selector position
    useEffect(() => {
        const activeLink = navRef.current?.querySelector(".active") as HTMLElement;

        if (activeLink) {
            const { offsetLeft, offsetWidth } = activeLink;
            setSelectStyle({
                left: `${offsetLeft}px`,
                width: `${offsetWidth}px`,
                opacity: 1,
            });
        }
    }, [activeSection]);

    return (
        <div className="navbar-container">
            <nav className="nav-links" ref={navRef}>
                <ul>
                    <span className="select" style={selectStyle}></span>

                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.id);
                                }}
                                className={
                                    activeSection === link.id ? "active" : ""
                                }
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="nav-login">
                {isLoggedIn ? (
                    <button className="login-btn" onClick={handleLogout}>
                        Se déconnecter
                    </button>
                ) : (
                    <Link to="/login" className="login-btn">
                        S'inscrire/connexion
                    </Link>
                )}
            </nav>
            {showLogoutPopup && (
                <div className="logout-popup">
                    <div className="popup-content">
                        <p>Vous vous êtes déconnecté avec succès</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
