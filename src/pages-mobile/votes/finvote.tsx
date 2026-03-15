import { useNavigate } from "react-router-dom";
import "./vote1.scss";

const finvoteMobile = () => {
	const navigate = useNavigate();

	return (
		<div className="vote-page-mobile">
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

export default finvoteMobile;
