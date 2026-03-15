import { useNavigate } from "react-router-dom";
import "./vote1.scss";

const finsondageMobile = () => {
    const navigate = useNavigate();

    return (
        <div className="vote-page-mobile">
            <main className="content">
                <h1>Merci pour tes réponses !</h1>

                <p>
                    Merci d'avoir pris le temps de partager ton avis.
                    Maintenant, place à la partie la plus attendue...
                </p>

                <button
                    className="next-button"
                    onClick={() => navigate("/premiervote")}
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

export default finsondageMobile;
