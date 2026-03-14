import { useNavigate } from "react-router-dom";
import "./vote1.scss";

const Vote5 = () => {
	const navigate = useNavigate();

	return (
		<div className="vote-page">
			<main className="content">
				<h1>Merci pour tes réponses !</h1>

				<p>
					Merci d'avoir pris le temps de partager ton avis.
					Maintenant, place à la partie la plus attendue...
				</p>

				<button
					className="next-button"
					onClick={() => navigate("/vote6")}
				>
					Voter maintenant
					<img
						src="/icons/arrowRight.svg"
						alt=""
						style={{ marginLeft: "10px", width: "20px" }}
					/>
				</button>
			</main>
		</div>
	);
};

export default Vote5;
