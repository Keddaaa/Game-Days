import { useNavigate } from "react-router-dom";
import "./vote1.scss";

const Vote8 = () => {
	const navigate = useNavigate();

	return (
		<div className="vote-page">
			<main className="content">
				<h1>Merci pour tes réponses !</h1>

				<button
					className="next-button"
					onClick={() => navigate("/index")}
					style={{ marginTop: "20px" }}
				>
					Retour
				</button>
			</main>
		</div>
	);
};

export default Vote8;
