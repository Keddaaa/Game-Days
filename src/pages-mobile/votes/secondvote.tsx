import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./vote6.scss";
import { useVote } from "../../context/VoteContext";
import { authService } from "../../../src/services/authService";

type Jeu = {
	id_jeu: number;
	nom_jeu: string;
	categorie: string;
};

const secondvoteMobile = () => {
	const navigate = useNavigate();
	const { selectedGames, setSelectedGames } = useVote();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [jeux, setJeux] = useState<Jeu[]>([]);

	useEffect(() => {
		authService.getJeux().then((jeuxRecup) => {
			const jeuxCompetitif = jeuxRecup.filter((j: Jeu) => j.categorie === "competitif");
			setJeux(jeuxCompetitif);
		});
	}, []);

	const toggleGame = (gameId: number) => {
		if (selectedGames.includes(gameId)) {
			setSelectedGames(selectedGames.filter((g: number) => g !== gameId));
		} else {
			setSelectedGames([...selectedGames, gameId]);
		}
	};

	const handleSubmit = async () => {
		setIsSubmitting(true);
		try {
			for (const gameId of selectedGames) {
				await authService.saveVote(gameId);
			}
		} catch (error) {
			console.error("Erreur lors de l'envoi des votes:", error);
		}
		setIsSubmitting(false);
		navigate("/finvote");
	};

	return (
		<div className="vote6-container">
			<button className="back-btn" onClick={() => navigate("/vote6")}>
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
						l'avis des organisateurs)
					</p>

					<div className="games-list">
						{jeux.map((game) => (
							<button
								key={game.id_jeu}
								className={`game-option ${
									selectedGames.includes(game.id_jeu) ? "active" : ""
								}`}
								onClick={() => toggleGame(game.id_jeu)}
							>
								{game.nom_jeu}
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

export default secondvoteMobile;
