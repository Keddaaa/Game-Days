import { useNavigate } from "react-router-dom";
import "./vote1.scss";
import { useVote } from "../../context/VoteContext";

const Vote4 = () => {
	const navigate = useNavigate();
	const { role, setRole, experienceTournoi, setExperienceTournoi } =
		useVote();

	return (
		<div className="vote-page">
			<button className="back-button" onClick={() => navigate("/vote3")}>
				<img src="/icons/arrow-left.svg" alt="" />
				<span>Retour</span>
			</button>

			<main className="content">
				<div className="cards-container">
					<div className="question-card">
						<h2>Comment souhaites-tu participer ?</h2>
						<div className="options">
							{[
								"En tant que joueur",
								"En tant que spectateur",
								"En tant que bénévole / organisateur",
							].map((option) => (
								<button
									key={option}
									className={`option-btn ${role === option ? "selected" : ""}`}
									onClick={() => setRole(option)}
								>
									{option}
								</button>
							))}
						</div>
					</div>

					<div className="question-card">
						<h2>
							As-tu déjà participé à un tournoi de jeu vidéo ?
						</h2>
						<div className="options">
							{["Oui", "Non", "Non, j'aimerais essayer"].map(
								(option) => (
									<button
										key={option}
										className={`option-btn ${experienceTournoi === option ? "selected" : ""}`}
										onClick={() =>
											setExperienceTournoi(option)
										}
									>
										{option}
									</button>
								),
							)}
						</div>
					</div>
				</div>

				<button
					className="next-button"
					onClick={() => navigate("/vote5")}
				>
					Suivant
				</button>
			</main>
		</div>
	);
};

export default Vote4;
