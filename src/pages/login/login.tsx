import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
	const [identifiant, setIdentifiant] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Connexion avec:", { identifiant, password });
	};

	return (
		<div className="login-page">
			<div className="login-container">
				<Link to="/" className="back-button">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path d="M19 12H5M12 19l-7-7 7-7" />
					</svg>
					Retour
				</Link>

				<div className="form-section">
					<h1>Connexion</h1>
					<p className="subtitle">
						Veuillez vous connecter pour continuer.
					</p>

					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<input
								type="text"
								placeholder="Identifiant"
								value={identifiant}
								onChange={(e) => setIdentifiant(e.target.value)}
							/>
						</div>

						<div className="form-group password-group">
							<input
								type={showPassword ? "text" : "password"}
								placeholder="Mot de passe"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button
								type="button"
								className="toggle-password"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? "Cacher" : "Cacher"}
							</button>
						</div>

						<button type="submit" className="submit-btn">
							Se connecter
						</button>

						<div className="separator">- ou -</div>

						<Link to="/inscription" className="signup-btn">
							S'inscrire
						</Link>
					</form>

					<p className="copyright">
						© 2025 Journée du Jeu Vidéo — IUT de Meaux
						<br />
						Tous droits réservés.
					</p>
				</div>

				<div className="image-section">
					<img src="./img/connexion.png" alt="Gaming" />
				</div>
			</div>
		</div>
	);
};

export default Login;
