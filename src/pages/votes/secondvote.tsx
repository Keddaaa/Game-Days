import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./vote6.scss";
import { useVote } from "../../context/VoteContext";
import { authService } from "../../services/authService";

const secondvote = () => {
	const navigate = useNavigate();
	const { selectedGames, setSelectedGames } = useVote();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const gamesList = [
		"Mario Kart",
		"Mario Party",
		"Rocket League",
		"Brawlhalla",
		"NBA 2k26",
		"Smash Bros Ultimate",
		"Naruto Storm 4",
		"Peut importe je veux juste découvrir",
		"Je ne suis pas intéressé(e) par cet espace",
	];

	const toggleLocalGame = (gameName: string) => {
		if (selectedGames.includes(gameName)) {
			setSelectedGames(selectedGames.filter((g) => g !== gameName));
		} else {
			setSelectedGames([...selectedGames, gameName]);
		}
	};

	const handleSubmit = async () => {
		setIsSubmitting(true);
		try {
			for (const gameId of selectedGames) {
				if (typeof gameId === "number") {
					await authService.saveVote(gameId);
				}
			}
		} catch (error) {
			console.error("Erreur lors de l'envoi des votes:", error);
		}
		setIsSubmitting(false);
		navigate("/finvote");
	};

	return (
		<div className="vote6-container">
			<button
				className="back-btn"
				onClick={() => navigate("/premiervote")}
			>
				← Retour
			</button>

			<main className="vote-content">
				<h2 className="title">
					Quels jeux grand public aimerais-tu retrouver dans l'espace
					Compétitif ?
				</h2>

				<div className="scroll-box">
					<p className="disclaimer">
						(Seuls les deux jeux ayant obtenu le plus de votes
						seront sélectionnés, en tenant compte également de
						l'avis des organisers)
					</p>

					<div className="games-list">
						{gamesList.map((game) => (
							<button
								key={game}
								className={`game-option ${
									selectedGames.includes(game) ? "active" : ""
								}`}
								onClick={() => toggleLocalGame(game)}
							>
								{game}
							</button>
						))}
					</div>
				</div>

				<div className="footer-actions">
					<button
						className="btn-next"
						onClick={handleSubmit}
						disabled={isSubmitting}
					>
						{isSubmitting ? "Envoi en cours..." : "Suivant"}
					</button>

					<button
						className="btn-skip"
						onClick={() => navigate("/finvote")}
					>
						Passer
					</button>
				</div>
			</main>
		</div>
	);
};

export default secondvote;
