import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./vote6.scss";
import { useVote } from "../../context/VoteContext";

const secondvoteMobile = () => {
	const navigate = useNavigate();
	const { selectedGames, setSelectedGames } = useVote();

	const [customGame, setCustomGame] = useState("");

	const gamesList = [
		"FC 26 (Equipe de 2)",
		"Smash Bros Ultimate (Equipe de 2/4)",
		"Dragon Ball Fighter Z",
		"Naruto Storm 4",
		"Tekken 8",
		"Rocket League",
		"Street Fighter 6",
		"Je ne suis pas intéressé(e) par cet espace",
	];

	const toggleGame = (game: string) => {
		if (selectedGames.includes(game)) {
			setSelectedGames(selectedGames.filter((g: string) => g !== game));
		} else {
			setSelectedGames([...selectedGames, game]);
		}
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
						{gamesList.map((game) => (
							<button
								key={game}
								className={`game-option ${
									selectedGames.includes(game) ? "active" : ""
								}`}
								onClick={() => toggleGame(game)}
							>
								{game}
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
						onClick={() => navigate("/finvote")}
					>
						Suivant
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
