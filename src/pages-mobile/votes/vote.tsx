import "./vote.scss";
import { useNavigate } from "react-router-dom";

const VoteMobile = () => {
	const navigate = useNavigate();
	return (
		<div className="vote">
			<button
				className="back-button"
				onClick={() => (window.location.href = "/")}
			>
				<img src="/icons/arrow-left.svg" alt="" />
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
