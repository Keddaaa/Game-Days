import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="">Accueil</Link>
				</li>
				<li>
					<Link to="">L’événement</Link>
				</li>
				<li>
					<Link to="">Vote tes jeux</Link>
				</li>
				<li>
					<Link to="">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
