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

const premiervoteMobile = () => {
	const navigate = useNavigate();
	const { selectedGames, setSelectedGames } = useVote();
	const [jeux, setJeux] = useState<Jeu[]>([]);

	const [customGame, setCustomGame] = useState("");

	useEffect(() => {
		authService.getJeux().then((jeuxRecup) => {
			const jeuxCasual = jeuxRecup.filter((j: Jeu) => j.categorie === "casual");
			setJeux(jeuxCasual);
		});
	}, []);

	const toggleGame = (gameId: number) => {
		if (selectedGames.includes(gameId)) {
			setSelectedGames(selectedGames.filter((g: number) => g !== gameId));
		} else {
			setSelectedGames([...selectedGames, gameId]);
		}
	};

	return (
		<div className="vote6-container">
			<button className="back-btn" onClick={() => navigate("/vote5")}>
				← Retour
			</button>

			<main className="vote-content">
				<h2 className="title">
					Quels jeux grand public aimerais-tu retrouver dans l'espace
					Découverte ?
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

					<div className="custom-game">
						<p>Autre jeu :</p>
						<input
							type="text"
							placeholder="Proposer un jeu..."
							value={customGame}
							onChange={(e) => setCustomGame(e.target.value)}
						/>
					</div>
				</div>

				<div className="footer-actions">
					<button
						className="btn-next"
						onClick={() => navigate("/secondvote")}
					>
						Suivant
					</button>

					<button
						className="btn-skip"
						onClick={() => navigate("/secondvote")}
					>
						Passer
					</button>
				</div>
			</main>
		</div>
	);
};

export default premiervoteMobile;
