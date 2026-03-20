import "./vote.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { authService } from "../../../src/services/authService";

const VoteMobile = () => {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [hasVoted, setHasVoted] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkVoteStatus = async () => {
			const user = authService.getUser();
			if (user) {
				setIsLoggedIn(true);
				const result = await authService.checkVoted();
				if (result.hasVoted) {
					setHasVoted(true);
				}
			}
			setLoading(false);
		};
		checkVoteStatus();
	}, []);

	if (loading) {
		return (
			<div className="vote">
				<main className="content">
					<h1>Chargement...</h1>
				</main>
			</div>
		);
	}

	if (!isLoggedIn) {
		return (
			<div className="vote">
				<main className="content">
					<h1>Accès restreint</h1>
					<p>Vous devez être connecté pour voter.</p>
					<button
						className="next-button"
						onClick={() => navigate("/login")}
					>
						Se connecter
					</button>
				</main>
			</div>
		);
	}

	if (hasVoted) {
		return (
			<div className="vote">
				<main className="content">
					<h1>Vous avez déjà voted</h1>
					<p>Vous avez déjà participé au vote. Merci !</p>
					<button
						className="next-button"
						onClick={() => navigate("/")}
					>
						Retour à l'accueil
					</button>
				</main>
			</div>
		);
	}

	return (
		<div className="vote">
			<button
				className="back-button"
				onClick={() => navigate("/")}
			>
				<span className="back-arrow">←</span>
				<span>Retour</span>
			</button>

			<main className="content">
				<h1>Faisons connaissance avant de jouer</h1>

				<p>
					Avant de voter pour tes jeux préférés, prends un instant
					pour répondre à ces quelques questions sur ta formation et
					ton rapport au jeu vidéo. Tes réponses nous aideront à mieux
					connaître les participants et à préparer une journée encore
					plus adaptée à vos envies.
				</p>

				<button
					className="next-button"
					onClick={() => navigate("/premiersondage")}
				>
					Suivant
				</button>
			</main>
		</div>
	);
};

export default VoteMobile;
