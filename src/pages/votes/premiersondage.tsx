import { useNavigate } from "react-router-dom";
import "./vote1.scss";
import { useVote } from "../../context/VoteContext";

const premiersondage = () => {
	const navigate = useNavigate();
	const { frequence, setFrequence, plateforme, setPlateforme } = useVote();

	return (
		<div className="vote-page questionnaire">
			<button className="back-button" onClick={() => navigate("/")}>
				<img src="/icons/arrow-left.svg" alt="" />
				<span>Retour</span>
			</button>

			<main className="content">
				<div className="cards-container">
					<div className="question-card">
						<h2>Tu joues souvent aux jeux vidéo ?</h2>
						<div className="options">
							{[
								"Tous les jours",
								"Plusieurs fois par semaine",
								"De temps en temps",
								"Rarement",
								"Jamais",
							].map((opt) => (
								<button
									key={opt}
									className={`option-btn ${frequence === opt ? "selected" : ""}`}
									onClick={() => setFrequence(opt)}
								>
									{opt}
								</button>
							))}
						</div>
					</div>

					<div className="question-card">
						<h2>Quelle plateforme de jeu préfères-tu ?</h2>
						<div className="options">
							{["PC", "Console", "VR", "Je ne joue pas"].map(
								(opt) => (
									<button
										key={opt}
										className={`option-btn ${plateforme === opt ? "selected" : ""}`}
										onClick={() => setPlateforme(opt)}
									>
										{opt}
									</button>
								),
							)}
						</div>
					</div>
				</div>

				<button
					className="next-button"
					onClick={() => navigate("/secondsondage")}
				>
					Suivant
				</button>
			</main>
		</div>
	);
};

export default premiersondage;
