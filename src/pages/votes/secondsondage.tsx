import { useNavigate } from "react-router-dom";
import "./vote1.scss";
import { useVote } from "../../context/VoteContext";

const secondsondage = () => {
	const navigate = useNavigate();
	const { typeJeu, setTypeJeu, participation, setParticipation } = useVote();

	return (
		<div className="vote-page">
			<button className="back-button" onClick={() => navigate("/premiersondage")}>
				<img src="/icons/arrow-left.svg" alt="" />
				<span>Retour</span>
			</button>

			<main className="content">
				<div className="cards-container">
					<div className="question-card">
						<h2>Quel type de jeux préfères-tu ?</h2>
						<div className="options">
							{[
								"Compétitifs",
								"Coopératifs",
								"Immersifs",
								"Casual / fun",
								"Rétro",
								"Je ne joue pas",
							].map((option) => (
								<button
									key={option}
									className={`option-btn ${typeJeu === option ? "selected" : ""}`}
									onClick={() => setTypeJeu(option)}
								>
									{option}
								</button>
							))}
						</div>
					</div>

					<div className="question-card">
						<h2>
							Comptes-tu participer à la Journée du Jeu Vidéo ?
						</h2>
						<div className="options">
							{[
								"Oui, toute la journée",
								"Seulement une partie de la journée",
								"Je passerai juste voir",
								"Non",
							].map((option) => (
								<button
									key={option}
									className={`option-btn ${participation === option ? "selected" : ""}`}
									onClick={() => setParticipation(option)}
								>
									{option}
								</button>
							))}
						</div>
					</div>
				</div>

				<button
					className="next-button"
					onClick={() => navigate("/troisiemesondage")}
				>
					Suivant
				</button>
			</main>
		</div>
	);
};

export default secondsondage;
