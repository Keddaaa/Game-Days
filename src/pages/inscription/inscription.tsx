import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./inscription.scss";

const Inscription = () => {
	const navigate = useNavigate();
	const [nomPrenom, setNomPrenom] = useState("");
	const [identifiant, setIdentifiant] = useState("");
	const [formation, setFormation] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [_, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (password !== confirmPassword) {
			setError("Les mots de passe ne correspondent pas");
			return;
		}

		try {
			const response = await fetch(
				"https://gameday.alwaysdata.net/register.php",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						nom_prenom: nomPrenom,
						identifiant: identifiant,
						formation: formation,
						mot_de_passe: password,
					}),
				},
			);

			const data = await response.json();

			if (data.success) {
				navigate("/login");
			} else {
				setError(data.error);
			}
		} catch (error) {
			setError("Erreur serveur");
		}
	};

	return (
		<div className="inscription-page">
			<div className="inscription-container">
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
					<h1>S'inscrire</h1>
					<p className="subtitle">
						Créez votre compte pour participer à l'événement.
					</p>

					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<input
								type="text"
								placeholder="Nom/Prénom"
								value={nomPrenom}
								onChange={(e) => setNomPrenom(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<input
								type="text"
								placeholder="Identifiant"
								value={identifiant}
								onChange={(e) => setIdentifiant(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<select
								value={formation}
								onChange={(e) => setFormation(e.target.value)}
								className="formation-select"
							>
								<option value="" disabled>
									Formation
								</option>
								<option value="mmi">MMI</option>
								<option value="gea">GEA</option>
								<option value="tc">TC</option>
								<option value="autre">Autre formation</option>
							</select>
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
								{showPassword ? "Masquer" : "Afficher"}
							</button>
						</div>

						<div className="form-group password-group">
							<input
								type={showConfirmPassword ? "text" : "password"}
								placeholder="Confirmer mot de passe"
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
							/>
							<button
								type="button"
								className="toggle-password"
								onClick={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
							>
								{showConfirmPassword ? "Masquer" : "Afficher"}
							</button>
						</div>

						<button type="submit" className="submit-btn">
							S'inscrire
						</button>

						<div className="separator">- ou -</div>

						<Link to="/login" className="signup-btn">
							Se connecter
						</Link>
					</form>

					<p className="copyright">
						© 2025 Journée du Jeu Vidéo — IUT de Meaux
						<br />
						Tous droits réservés.
					</p>
				</div>

				<div className="image-section">
					<img src="/img/inscription.png" alt="Gaming" />
				</div>
			</div>
		</div>
	);
};

export default Inscription;
